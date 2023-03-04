import Header from "./Header";
import "./App.css";
import React from "react";
import {Banner} from './Banner';
import {Navbar} from './Navbar';
import { ProductFeed } from "./components";

import Footer from "./components/Footer";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { yellow } from "@mui/material/colors";



function App() {
  return <>
  <Header/>
  <Navbar/>
  <Banner/>
  <h1 style={{color:"blue",display:"flex",textAlign:"center",marginLeft:"40%"}}>Please Login..<SentimentVerySatisfiedIcon style={{color:"yellow",fontSize:"50px"}}/></h1>
 
  <ProductFeed/>
  <Footer/>
 
 
 

  </>;

}

export default App;
