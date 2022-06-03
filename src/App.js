import './App.css'
//project first import files
import React from "react"
import Navbar from "./Component/Navbar"
import Main from './Component/Main'


function Project(){
    const [darkMode,setDarkMode]=React.useState(true)
    function toggleDarkMode(){
        setDarkMode(prevMode =>!prevMode)
    }
    return(
        //projet1 first data informtion
        <div className="container">  
        <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        />
        <Main darkMode={darkMode}/>
        </div>
        
        
    )
}
export default Project;