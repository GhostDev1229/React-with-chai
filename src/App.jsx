import { useState } from "react";

function App() {

  let[counter,setCounter]=useState(5);

  const addValue = () => {
    if(counter>=20) return;
  setCounter(counter+1);
  }

   const decValue = () => {
    if(counter<=0) return;
  setCounter(counter-1) ;
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter} </h2>

    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={decValue}>Decrese value</button>
    </>
  )
}

export default App
