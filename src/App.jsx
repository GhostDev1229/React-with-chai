<<<<<<< HEAD
import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme.jsx"
import ThemeButton from "./Components/ThemeButton.jsx"
import Card from "./Components/Card.jsx"

function App() {

  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }

    const darkTheme=()=>{
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode , darkTheme , lightTheme }}>
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>

=======
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
>>>>>>> b90deba90f53a6f109db4f6c06f06cdb64edbf7a
  )
}

export default App
