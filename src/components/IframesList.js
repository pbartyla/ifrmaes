import React from "react";
import Iframe from "./Iframe";


export default function IframesList({ numberOfFrames, numberOfCols, numberOfRows }) {
  
  return (
    <React.Fragment>
      {[...Array(numberOfFrames ? parseInt(numberOfFrames) : 0)].map((e, i) => (
        <Iframe key={i} index={i} title={`title-${i}`}  numberOfCols={numberOfCols} numberOfRows={numberOfRows} numberOfFrames={numberOfFrames}  />
      ))}
    </React.Fragment>
  );
}
