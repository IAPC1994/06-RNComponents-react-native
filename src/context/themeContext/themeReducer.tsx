import { Theme } from "@react-navigation/native"

type ThemeAction = 
    |{ type: 'LightTheme'}
    |{ type: 'DarkTheme' }

export interface ThemeState extends Theme{
    currentTheme: 'light' | 'dark',
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.6)',
    colors:{
        primary:'#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal'
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.6)',
    colors:{
        primary:'#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'black',
        notification: 'teal'
    }
}

export const themeReducer = ( state:ThemeState, action:ThemeAction  ):ThemeState => {
    
    switch ( action.type ) {
        case 'LightTheme':
            return { ...lightTheme };

        case 'DarkTheme':
            return { ...darkTheme };
    
        default:
            return state;
    }
}