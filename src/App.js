import Header from "./Header";
import "./App.css";
import React from "react";
import {Banner} from './Banner';
import {Navbar} from './Navbar';
import { ProductFeed } from "./components";
import FavoriteIcon from '@mui/icons-material/Favorite';


function App() {
  return <>
  <Header/>
  <Navbar/>
  <Banner/>
  <ProductFeed/>
  <p className="copy">@FlipkartUI created by kumar <FavoriteIcon style={{color:"red"}}/></p>

  </>;

}

export default App;
