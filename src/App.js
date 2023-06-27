import { useState } from 'react';
import './App.css';

import {bubu} from "./recipes";
import {materials} from "./allmaterials";
import {SearchParams, SearchOption, SortingMode} from "./SearchOptions";
import {msToTime} from "./misc";
import exchangeAll from './exchange-all.json';

// import {useHotkeys} from "react-hotkeys-hook";

function App() {
    // outMatch is what i'm searching among the outputs of a recipe
    const outMatchTuple = useState("");
    const inMatchTuple = useState("");
    const outMatchActiveTuple = useState(true);
    const inMatchActiveTuple = useState(false);
    const sortingModeTuple = useState(SortingMode.ETA_ASC);

    const SP = new SearchParams(inMatchTuple, outMatchTuple, inMatchActiveTuple, outMatchActiveTuple, sortingModeTuple);

    // useHotkeys(
    //     'ctrl+y',
    //     event => {
    //         event.preventDefault();
    //         inMatchTuple[1]("ALO");
    //     },
    //     {
    //         // enabled: () => false,
    //         preventDefault: true,
    //     }
    // );

    return (
     <div className="App">
         <div className="header" style={{"display": "flex"}}>
             <Header />
             <SearchInput SP={SP} />
         </div>
         <PuRecipesList SP={SP} />
     </div>
    );
}

// ========================================================================================

function Header() {
    return (
        <div className={"WebpageTitle"} >
            <h1>Prosperous World</h1>
            <h5>Materials tree</h5>
        </div>
    )
}


// ========================================================================================

const sortingOptions = [
    {value: SortingMode.ETA_ASC,  label: "Time required (increasing order)"},
    {value: SortingMode.ETA_DEC, label: "Time required (decreasing order)"}
]

function SortingOrder({SP}) {
    let options = sortingOptions.map(so =>
        <option value={so.value}>{so.label}</option>
    );

    return (
        <select onChange={e => {
            SP.setter(SearchOption.CurrentSortingMode, parseInt(e.target.value));
        }}>
            {options}
        </select>
    );
}


// ========================================================================================

function SearchInput({SP}) {
    return (
        // eslint-disable-next-line react/style-prop-object
        <form className={"searchForm"}>
            <div>
            <label style={{"padding": "1em"}}>Match on input:</label>
            <input
                type="text"
                value={SP.getter(SearchOption.InMatch)}
                placeholder="Search..."
                disabled={!SP.getter(SearchOption.InMatchActive)}
                maxLength={19}
                size={11}
                onChange={(e) =>
                    SP.setter(SearchOption.InMatch, e.target.value.toUpperCase())}
            />

            <input type="checkbox"
                   onChange={(_) =>
                      SP.setter(
                        SearchOption.InMatchActive,
                        !SP.getter(SearchOption.InMatchActive))}
                   checked={SP.getter(SearchOption.InMatchActive)}
            />
            </div>

            <div>
                <label style={{"padding": "1em"}}>Match on output:</label>
                <input
                    type="text"
                    value={SP.getter(SearchOption.OutMatch)}
                    autoFocus={true}
                    placeholder="Search..."
                    maxLength={19}
                    size={11}
                    disabled={!SP.getter(SearchOption.OutMatchActive)}
                    onChange={(e) =>
                        SP.setter(SearchOption.OutMatch, e.target.value.toUpperCase())}
                />
                <input type="checkbox"
                       onChange={(_) =>
                           SP.setter(
                               SearchOption.OutMatchActive,
                               !SP.getter(SearchOption.OutMatchActive))}
                       checked={SP.getter(SearchOption.OutMatchActive)}
                />
            </div>

            <div>
                <SortingOrder SP={SP} />
            </div>
        </form>
    )
}

// ========================================================================================

function PuRecipesList({SP}) {
    /* Lists all the recipes matching the given SearchParameters. */

    let matchingRecipes = bubu.filter(recipe =>
        SP.matchesOnInput(recipe) && SP.matchesOnOutput(recipe)
    )

    matchingRecipes.sort((x, y) => {
            let sm = SP.getter(SearchOption.CurrentSortingMode);
            if (sm === SortingMode.ETA_ASC) {
                return x["TimeMs"] - y["TimeMs"];
            } else if (sm === SortingMode.ETA_DEC) {
                return y["TimeMs"] - x["TimeMs"];
            }

            throw sm;
        }
    );

    return (
        <div className={"PuRecipesList"}>
            { matchingRecipes.map(recipe =>
                <PuObjectSummary puRecipe={recipe}
                                 highlightText={SP.matchableWords()} />)
            }
        </div>
    );
}
// ========================================================================================


function PuObjectSummary({puRecipe, highlightText}) {
    /* A table showing the input and output material for a given recipe. */

    return (
      <div className="PuObjectSummary">
          <h2 style={{"margin-bottom": "2px"}}>{puRecipe["RecipeName"]}</h2>

          {/*<div className="PuObjectOtherInfos">*/}
          <p style={{"margin-top": "2px"}}>{puRecipe["BuildingTicker"]}</p>
          {/*</div>*/}

          <div className="inputOutputFlex">
              <div className="bomListContainer">
              <h3>Inputs</h3>
              <BOMList boms={puRecipe["Inputs"]} highlightText={highlightText} />
              </div>

              <div className="bomListContainer">
              <h3>Outputs</h3>
              <BOMList boms={puRecipe["Outputs"]} highlightText={highlightText} />
              </div>
          </div>

          <div className="PuObjectOtherInfos">
              <p>{msToTime(puRecipe["TimeMs"])}</p>
          </div>
      </div>
  )
}

// ==================================================================

function singleBomTotalCost(bom) {
    return Math.round(bom["Amount"] * exchangeAll[bom["Ticker"]]["PriceAverage"]);
}

function BOMList({boms, highlightText}) {
    /* Show a list of <material + amount> */
    let total = boms.reduce((accumulator, bom) =>
        accumulator + singleBomTotalCost(bom), 0);

    return (
        <div className="bomEntries">
            {boms.map(bom =>
                highlightText.includes(bom["Ticker"]) ?
                <p>
                    <b style={{backgroundColor: "antiquewhite"}}><RichTiker ticker={bom["Ticker"]} /></b> - {bom["Amount"]}
                </p>
                    :
                <p>
                    <RichTiker ticker={bom["Ticker"]} /> - {bom["Amount"]}
                </p>
            )}
            <br />
            <p>Total: {total}$</p>
        </div>
    )
}

function RichTiker({ticker}) {
    return (
        <span className="Ticker"
              title={materials[ticker]["Name"]}>
            {ticker}
            ({exchangeAll[ticker]["PriceAverage"]} $)
        </span>
    );
}

export default App;
