import { useState, createContext } from "react";
import logo from "./logo.svg";
import { Container } from "./Components";
import Grid from "./Grid";
import Results from "./Results";
export const AppContext = createContext();

function App() {
  const [error, setError] = useState(false);
  const [played, setPlayed] = useState(false);
  const [results, setResults] = useState({});
  const [values, setValues] = useState({});
  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        played,
        setPlayed,
        values,
        setValues,
        results,
        setResults,
      }}
    >
      <Container className="App">
        <header>
          <img src={logo} alt="Game Theory Guide Logo" />
        </header>
        <Grid />
        {played && <Results />}
      </Container>
    </AppContext.Provider>
  );
}

export default App;
