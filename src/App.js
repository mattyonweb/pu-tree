import { useState } from 'react';
import './App.css';

import {bubu} from "./diohane";

const fs= require('fs');

let allreciped = bubu;

function App() {
    const [filterText, setFilterText]  = useState('ENO');
    const [resultsList, setResultList] = useState([]);

    function performSearch() {
        setResultList(
            bubu.filter(recipe =>
                            recipe["Outputs"].some(puOutput => puOutput["Ticker"] === filterText))
                .map(recipe => <PuObjectSummary puRecipe={recipe} />)
        );
    }

    return (
     <div className="App">
        <SearchInput
            filterText={filterText}
            setFilterText={setFilterText}
            performSearch={performSearch}
        />

         {resultsList}
        {/*{resultsList.map(entry =>*/}
        {/*    <PuObjectSummary puRecipe={entry} />)*/}
        {/*}*/}
     </div>
    );
}

// ========================================================================================

function SearchInput({filterText, setFilterText, performSearch}) {
    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => {
                    performSearch();
                    setFilterText(e.target.value);
                }
            }
            />
        </form>
    )
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
    /* Show a list of material + amount */
    return (
        <div class="bomEntries">
            {boms.map(bom =>
              <p>{bom["Ticker"]} - {bom["Amount"]}</p>
            )}
        </div>
    )
}

export default App;
