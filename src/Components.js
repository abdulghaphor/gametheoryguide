import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #ff0000;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 50px;
  text-align: center;
  header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    img {
      height: 80%;
      width: auto;
    }
  }
  button {
    font-size: 2em;
    background: 0;
    border: 2px solid black;
    padding: 5px;
    margin: 20px;
  }
`;

export const GridContainer = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
  border: 2px solid black;
  input {
    border: 2px solid black;
    text-align: center;
    font-size: 2em;
    background: white;
    &:focus {
      outline: 0;
    }
  }
`;
export const ResultsContainer = styled.div`
  width: 900px;
  margin: auto;
  h3 {
    font-size: 2em;
  }
  h4 {
    font-size: 1.5em;
  }

  #best-responses {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    h3 {
      width: 100%;
    }
    p {
      font-size: 1.3em;
    }
    div {
      flex: 1;
      line-height: 2em;
    }
  }
`;
