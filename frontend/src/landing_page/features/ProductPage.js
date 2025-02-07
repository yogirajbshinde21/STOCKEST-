import React from "react";
import Community from "./Community";
import Currencyfake from "./Currencyfake";
import Educationmod from "./Educationmod";
import Language from "./Language";
import Leaderboard from "./Leaderboard";
import Progress from "./Progress";
import Simulation from "./Simulation";



import OpenAccount from "../OpenAccount";

function ProductPage() {
  return (
    <>
      
      <Currencyfake />
      <Simulation />
      <Language />
      <Educationmod />
      <Progress />
      <Leaderboard />
      <Community />
      <OpenAccount />
    
      

      
    </>
  );
}

export default ProductPage;