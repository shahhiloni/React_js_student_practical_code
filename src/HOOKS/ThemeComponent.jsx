import React from "react";
import {useTheme} from "./Theme";
export function ThemeComponent(){
    const{theme, toggleTheme} = useTheme();


    const Style = {
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" :"white",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        transition: "all 0.3s ease"
    }

    return (
        <div style={Style}> 
<h2> {theme.toUpperCase()} mode </h2>
<button onClick={toggleTheme}> switch to {theme === "light" ? "dark" : "light"} MODE </button>
        </div>
    )
}