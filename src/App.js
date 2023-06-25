import { useState } from 'react';
import './App.css';

import {bubu} from "./recipes";

function App() {
    // filterText is the "reference variable" to the text I'm searching
    const [filterText, setFilterText]  = useState('ENO');

    return (
     <div className="App">
         <SearchInput
            filterText={filterText}
            setFilterText={setFilterText}
         />

         <PuRecipesList filterText={filterText} />
     </div>
    );
}

// ========================================================================================

function SearchInput({filterText, setFilterText}) {
    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => setFilterText(e.target.value)}
            />
        </form>
    )
}

// ========================================================================================

function PuRecipesList({filterText}) {
    /* Lists all the recipes matching the given filterText. */

    let results = bubu.filter(recipe =>
        recipe["Outputs"].some(puOutput => puOutput["Ticker"] === filterText)
    );

    return (
        <div className={"PuRecipesList"}>
            {results.map(recipe => <PuObjectSummary puRecipe={recipe} />)}
        </div>
    );
}
// ========================================================================================


function PuObjectSummary({puRecipe}) {
    /* A table showing the input and output material for a given recipe. */

    return (
      <div className="PuObjectSummary">
          <h2>{puRecipe["RecipeName"]}</h2>

          <div className="inputOutputFlex">
              <div className="bomListContainer">
              <h3>Inputs</h3>
              <BOMList boms={puRecipe["Inputs"]} />
              </div>

              <div className="bomListContainer">
              <h3>Outputs</h3>
              <BOMList boms={puRecipe["Outputs"]} />
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

function BOMList({boms}) {
    /* Show a list of <material + amount> */
    return (
        <div class="bomEntries">
            {boms.map(bom =>
              <p>{bom["Ticker"]} - {bom["Amount"]}</p>
            )}
        </div>
    )
}

export default App;
