import React from 'react'
import { NavData } from './NavData';



export const Navbar = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
         {
                NavData.map(temp => (
                    <>
                    <div>
                        <img src={temp.url} style={{  width: 64 }} />
                        <p style={{marginTop:"0px"}}>{temp.text}</p>
                    </div>
                    
                </>
                ))
            }
        </div>
    )
}

export default Navbar;