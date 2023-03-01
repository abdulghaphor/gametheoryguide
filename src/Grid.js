import { useContext } from "react";
import { AppContext } from "./App";
import createGame from "./createGame";
import calculateBestResponses from "./calculateBestResponses";
import { GridContainer } from "./Components";

const Grid = () => {
  const {
    values: gridValues,
    setValues: setGridValues,
    setResults,
    setPlayed,
  } = useContext(AppContext);
  const handleChange = (event) => {
    setGridValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const game = createGame(gridValues);
    setResults(calculateBestResponses(game));
    setPlayed(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <input
          type="text"
          name="gridLeftUp"
          value={gridValues.gridLeftUp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gridRightUp"
          value={gridValues.gridRightUp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gridLeftDown"
          value={gridValues.gridLeftDown}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gridRightDown"
          value={gridValues.gridRightDown}
          onChange={handleChange}
        />
      </GridContainer>
      <button type="submit">Play</button>
      <button
        type="reset"
        onClick={() => {
          setPlayed(false);
          setGridValues({});
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default Grid;
