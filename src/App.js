import { useState } from 'react';
import './App.css';

import {bubu} from "./recipes";
import {materials} from "./allmaterials";
import {SearchParams, SearchOption, SortingMode} from "./SearchOptions";
import {msToTime} from "./misc";

function App() {
    // outMatch is what i'm searching among the outputs of a recipe
    const outMatchTuple = useState("");
    const inMatchTuple = useState("");
    const outMatchActiveTuple = useState(false);
    const inMatchActiveTuple = useState(false);
    const sortingModeTuple = useState(SortingMode.ETA_ASC);

    const SP = new SearchParams(inMatchTuple, outMatchTuple, inMatchActiveTuple, outMatchActiveTuple, sortingModeTuple);

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
        <div style={{"width": "20vw", "background-color": "antiquewhite", "font-style": "italic", "line-height": "0.8em"}}>
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
                onChange={(e) =>
                    SP.setter(SearchOption.InMatch, e.target.value.toUpperCase())}
            />

            <input type="checkbox"
                onChange={(_) =>
                    SP.setter(
                        SearchOption.InMatchActive,
                        !SP.getter(SearchOption.InMatchActive))}
            />
            </div>

            <div>
                <label>Match on output material:</label>
                <input
                    type="text"
                    value={SP.getter(SearchOption.OutMatch)}
                    placeholder="Search..."
                    disabled={!SP.getter(SearchOption.OutMatchActive)}
                    onChange={(e) =>
                        SP.setter(SearchOption.OutMatch, e.target.value.toUpperCase())}
                />
                <input type="checkbox"
                       onChange={(_) =>
                           SP.setter(
                               SearchOption.OutMatchActive,
                               !SP.getter(SearchOption.OutMatchActive))}
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
          <h2>{puRecipe["RecipeName"]}</h2>

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

function BOMList({boms, highlightText}) {
    /* Show a list of <material + amount> */
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
        </div>
    )
}

function RichTiker({ticker}) {
    return (
        <span className="Ticker"
              title={materials[ticker]["Name"]}>
            {ticker}
        </span>
    );
}

export default App;
