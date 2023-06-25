import { useState } from 'react';
import './App.css';

import {bubu} from "./recipes";

function App({initialSearchText}) {
    // outMatch is what i'm searching among the outputs of a recipe
    const [outMatch, setOutMatch] = useState("");
    // inMatch is what i'm searching among the inputs of a recipe
    const [inMatch, setInMatch]   = useState("");

    return (
     <div className="App">
         <SearchInput
             inMatch={inMatch}   setInMatch={setInMatch}
             outMatch={outMatch} setOutMatch={setOutMatch}
         />

         <PuRecipesList inMatch={inMatch} outMatch={outMatch} />
     </div>
    );
}

// ========================================================================================

function SearchInput({inMatch, setInMatch, outMatch, setOutMatch}) {
    return (
        <form>
            <label>Match on output material:</label>
            <input
                type="text"
                value={outMatch}
                placeholder="Search..."
                onChange={(e) => setOutMatch(e.target.value)}
            />

            <label>Match on input:</label>
            <input
                type="text"
                value={inMatch}
                placeholder="Search..."
                onChange={(e) => setInMatch(e.target.value)}
            />

            <input type="checkbox" />

        </form>
    )
}

// ========================================================================================

function recipeContainsInOutput(recipe, text) {
    return recipe["Outputs"].some(puOutput => puOutput["Ticker"] === text);
}
function recipeContainsInInput(recipe, text) {
    return recipe["Inputs"].some(puInput => puInput["Ticker"] === text);
}

function PuRecipesList({inMatch, outMatch}) {
    /* Lists all the recipes matching the given filterText. */
    let results = bubu.filter(recipe =>
        recipeContainsInOutput(recipe, outMatch) &&
            (inMatch==="" || recipeContainsInInput(recipe, inMatch))
    );

    return (
        <div className={"PuRecipesList"}>
            {results.map(recipe =>
                <PuObjectSummary puRecipe={recipe}
                                 highlightText={[inMatch, outMatch]} />)}
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

          <img
              src="https://thomaspynchon.com/wp-content/uploads/2014/08/Pynchon-simpsons2.jpg"
              alt="Katherine Johnson"
          />
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
