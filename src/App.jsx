import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Chart from "./components/Chart";
import GeneratorTb from "./components/GeneratorTb";
import CompressorTb from "./components/CompressorTb";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <Info>
          <Stats />
          <Chart />
        </Info>
        <Tables>
          <h2>Generator</h2>
          <GeneratorTb />
          <h2>Compressor</h2>
          <CompressorTb />
        </Tables>
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  display: flex;
`;

const Info = styled.div`
  flex: 1;
`;
const Tables = styled.div`
  flex: 1;
  padding: 20px;
`;
