import IframesList from "./components/IframesList";
import React, { useEffect, useState } from "react";
import { FaArrowsAltV } from 'react-icons/fa';
import {TextField, FormControl, Box, Button} from '@mui/material'

function App() {
  const [numberOfFrames, setNumberOfFrames] = useState(1);
  const [numberOfCols, setNumberOfCols] = useState(1);
  const [numberOfRows, setNumberOfRows] = useState(1);
  const [showForm, setShowForm] = useState(true);
  const [frameProps, setFrameProps] = useState({numberOfFrames: 1, numberOfCols: 1, numberOfRows: 1})


  const onShowForm = () => {
    setShowForm(!showForm)
  }


  const onSubmit = (e) => { 
    setFrameProps({
      numberOfFrames:numberOfFrames,
      numberOfCols: numberOfCols,
      numberOfRows: numberOfRows
    })
  }
  
  return (
    <React.Fragment>
        <main>
          <div className="form__wrapper">
            <FormControl className={`form ${showForm &&'show'}`}>
                <Box mt={2}>
                  <TextField 
                  id="outlined-basic" 
                  label="Number" 
                  variant="outlined" 
                  value={numberOfFrames}
                  onChange={(e) => setNumberOfFrames(e.target.value)}
                  />
                </Box>
                <Box mt={2}>
                  <TextField 
                  id="outlined-basic" 
                  label="Cols" 
                  variant="outlined" 
                  value={numberOfCols}
                  onChange={(e) => setNumberOfCols(e.target.value)}
                  />
                </Box>
                <Box mt={2}>
                  <TextField 
                  id="outlined-basic" 
                  label="Rows" 
                  variant="outlined" 
                  value={numberOfRows}
                  onChange={(e) => setNumberOfRows(e.target.value)} 
                  />
                </Box>
                <Button onClick={onSubmit} variant="outlined">Change</Button>
                <FaArrowsAltV className="toogleButton" onClick={onShowForm} />
            </FormControl>

          </div>

          <IframesList numberOfFrames={frameProps.numberOfFrames}  numberOfCols={frameProps.numberOfCols} numberOfRows={frameProps.numberOfCols}   />
        </main>
    </React.Fragment>
  );
}

export default App;
