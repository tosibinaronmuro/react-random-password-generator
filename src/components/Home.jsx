import React, { useState } from "react";
import RandomFunction from "./pages/RandomFunction";
import Random from "./Random";

function Home() {
  // const [clicked,setClicked]=useState(false)
const generate=(e)=>{
e.preventDefault();
 
 
}

  return (
    <div className="min-h-screen max-w-screen  bg-purple-100">
      <h1 className="flex justify-center items-center h-20 underline">
   
        <span className="text-2xl font-extralight font-mono">
          Random Password Generator
        </span>
      </h1>

      <div  className="flex justify-center items-center flex-col-reverse ">
        {/* <RandomFunction  /> */}
      
      <div className="lock p-2 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md   dark:bg-gray-800 dark:border-gray-700  ">
     
      
        {/* {clicked && <Random on number={5}/>} */}
        <Random    />
        </div>

         
          
          
        </div>
      </div>
    
  );
}

export default Home;
