import React, { useContext } from "react";
import { AppContext } from "./App";
import { ResultsContainer } from "./Components";
export default function Results() {
  const { results } = useContext(AppContext);
  return (
    <ResultsContainer>
      <div id="best-responses">
        <h3>Best Responses</h3>
        <div id="player-one">
          <h4>Player One</h4>
          <p>B(left): {results.playerOne.left}</p>
          <p>B(right): {results.playerOne.right}</p>
        </div>
        <div id="player-two">
          <h4>Player Two</h4>
          <p>B(up): {results.playerTwo.up}</p>
          <p>B(down): {results.playerTwo.down}</p>
        </div>
      </div>
      {results.nash.length > 0 && (
        <div id="nash">
          <h3>Nash</h3>
          {results.nash.map((el, i) => {
            if (results.nash.length > i + 1) {
              return `(${el.reduce((acc, cv) => acc + "," + cv)}),`;
            } else {
              return `(${el.reduce((acc, cv) => acc + "," + cv)})`;
            }
          })}
        </div>
      )}
    </ResultsContainer>
  );
}
