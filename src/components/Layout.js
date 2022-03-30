import { useState } from "react"


export default function Layout({setFrame}){

    const[framenumber, setFramenumber] = useState()


    const onSubmit = (e) => {
        e.preventDefault()
        setFrame(framenumber)
    }
    
    return(
        <form onSubmit={onSubmit}>
            <input  
                value={framenumber} 
                onChange={(e)=> setFramenumber(e.target.value)}        
            />
            <button>CHANGE</button>
        </form>
    )
}