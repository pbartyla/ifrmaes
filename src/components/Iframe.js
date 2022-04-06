import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import CardMedia from '@mui/material/CardMedia';


export default function Iframe({numberOfCols, numberOfRows}){


    const [data, setData] = useState({})


    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const result = await axios(
    //           '')
    //             .then(res => console.log(res))
    //             .catch(err => console.error(err))
    //         };
      
    //       fetchData();
    // },[]) 

 
   

    const style = { 
        width: `calc(100% / ${numberOfCols})`,
        height: `calc(100vh / ${numberOfRows})`,
    };

    
    return  (
        <Box style={style}>

            <CardMedia component='iframe' width="100%" height="100%" src='https://picsum.photos/1920/1080.webp'/>
        </Box>
       
    )
}