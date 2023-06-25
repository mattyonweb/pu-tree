import { useState } from 'react';
import './App.css';

import {bubu} from "./recipes";
import {SearchParams, SearchOption} from "./SearchOptions";
import {msToTime} from "./misc";

function App() {
    // outMatch is what i'm searching among the outputs of a recipe
    const outMatchTuple = useState("");
    const inMatchTuple = useState("");
    const outMatchActiveTuple = useState(false);
    const inMatchActiveTuple = useState(false);

    const SP = new SearchParams(inMatchTuple, outMatchTuple, inMatchActiveTuple, outMatchActiveTuple);

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
        <div style={{"width": "20vw", "background-color": "antiquewhite", "font-style": "italic"}}>
            <h1>Tree vix</h1>
        </div>
    )
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
                    SP.setter(SearchOption.InMatch, e.target.value)}
            />

            <input type="checkbox"
                onChange={(e) =>
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
                        SP.setter(SearchOption.OutMatch, e.target.value)}
                />
                <input type="checkbox"
                       onChange={(e) =>
                           SP.setter(
                               SearchOption.OutMatchActive,
                               !SP.getter(SearchOption.OutMatchActive))}
                />
            </div>
        </form>
    )
}

// ========================================================================================

function PuRecipesList({SP}) {
    /* Lists all the recipes matching the given filterText. */
    let results = bubu.filter(recipe =>
        SP.matchesOnOutput(recipe) &&
            (!SP.getter(SearchOption.InMatchActive) || SP.matchesOnInput(recipe))
    );

    return (
        <div className={"PuRecipesList"}>
            { results.map(recipe =>
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

          {/*<img*/}
          {/*    src="https://thomaspynchon.com/wp-content/uploads/2014/08/Pynchon-simpsons2.jpg"*/}
          {/*    alt="Katherine Johnson"*/}
          {/*/>*/}
      </div>
  )
}

// ==================================================================

function BOMList({boms, highlightText}) {
    /* Show a list of <material + amount> */
    return (
        <div class="bomEntries">
            {boms.map(bom =>
                highlightText.includes(bom["Ticker"]) ?
                ( <p><b>{bom["Ticker"]}</b> - {bom["Amount"]}</p> ) :
                ( <p>{bom["Ticker"]} - {bom["Amount"]}</p> )
            )}
        </div>
    )
}

export default App;
