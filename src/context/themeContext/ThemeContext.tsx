import React, { createContext, useReducer } from "react";
import { useColorScheme } from "react-native";
import { themeReducer, ThemeState, lightTheme, darkTheme } from './themeReducer';

interface ThemeContextProps{
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}


export const ThemeContext = createContext( {} as ThemeContextProps );

export const ThemeProvider = ( { children } : any ) => {

    const colorScheme = useColorScheme();

    const [ theme, dispatch ] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme );
    
    const setDarkTheme = () =>{
        dispatch({ type: 'DarkTheme'});
    }

    const setLightTheme = () => {
        dispatch({ type: 'LightTheme'});
    }

    return(
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}