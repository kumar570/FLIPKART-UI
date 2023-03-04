import { Favorite } from '@mui/icons-material'
import React from 'react'
import "./Style.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    
     <>

     <div className="footer">
         
          <div className='icons' style={{display:"flex",alignItems:"flex-end",marginTop:"0",margin:"20px"}}>
         
          <FacebookIcon style={{width:"50px"}} />
          <TwitterIcon style={{width:"50px"}}/>
          <InstagramIcon style={{width:"50px"}}/>
          <p style={{margin:"auto"}} >@FlipkartUI created by kumar <Favorite style={{color:"red"}}/></p>
          </div>
          
        
          
      </div>   
          
   </>     
  
  )
}

export default Footer