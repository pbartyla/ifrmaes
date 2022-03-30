
import IframesList from "./components/IframesList";
import Layout from "./components/Layout";
import React, { useState } from "react";

function App() {

  const [number, setNumber]  = useState(1)


  const setFrame = (numberFrame) => {
      setNumber(numberFrame)
  }

  return (
    <React.Fragment>
      <Layout number={number} setFrame={setFrame} />
      <IframesList number={number}/>
    </React.Fragment>
  );

}

export default App;
