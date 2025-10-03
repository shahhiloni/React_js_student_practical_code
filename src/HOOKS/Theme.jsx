import React, {useState, useContext, createContext} from "react";

// create context 
const ThemeContext = createContext();

// provider Component 

export function ThemeProvider({children}) {
const [theme, setTheme] = useState("light");

const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
};

return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
{children}
    </ThemeContext.Provider>
)
}


export function useTheme(){
    return useContext(ThemeContext);
}
