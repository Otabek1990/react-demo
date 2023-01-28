import React from "react";
import Banner from "./Banner";

function Main(props) {
  const handleSubmit=e=>{
    e.preventDefault()
  }
  return (
    <main>
      <Banner/>
  
    </main>
  );
}

export default Main;
