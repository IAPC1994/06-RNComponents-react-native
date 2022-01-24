import React from 'react';
import { Navigation } from './src/router/Navigation';
import { LogBox } from 'react-native';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

// const customTheme: Theme = {
//   dark: true,
//   colors:{
//     ...DarkTheme.colors
//     // primary: ;
//     // background: ;
//     // card: ;
//     // text: ;
//     // border: ;
//     // notification: ;
//   }
// }

const App = () => {
  return(
    <AppState>
        <Navigation />
    </AppState>
  );
};

const AppState = ({ children }:any) => {
  return (
    <ThemeProvider>
        { children }
    </ThemeProvider>
  );
}


export default App;