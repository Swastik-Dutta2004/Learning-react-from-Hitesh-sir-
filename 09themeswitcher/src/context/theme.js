import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    thememode:"light",
    darkmode:()=>{},
    lightmode:()=>{},
   
})

export const ThemePorvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}