/* eslint-disable no-unused-vars */
import { useState } from "react";
import HCComponent from "./horizontal-center";
import VCComponent from "./vertical-center";
import "./App.css";
import HVCComponent from "./horizontal-vertical-center";
import Links from "./links";
import TwoColumns from "./two-columns";
import ThreeColumns from "./three-columns";
import EqualWidth from "./equal-width";
import StickFooter from "./stick-footer/index.2";
import FullScreen from "./full-screen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Links />
      <HCComponent />
      <VCComponent />
      <HVCComponent />
      <TwoColumns />
      <ThreeColumns />
      <EqualWidth /> */}
      {/* <StickFooter /> */}
      <FullScreen />
    </div>
  );
}

export default App;
