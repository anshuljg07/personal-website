import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/HomePage'
import {CssBaseline, ThemeProvider} from "@mui/material";
import { useCustomTheme } from './styles/styles';


function App() {

    // toggleColorMode() is a function that can be used by an inner component to change the theme of the site
    const { theme, toggleColorMode } = useCustomTheme();

    // const


  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </CssBaseline>
        </ThemeProvider>
    </div>
  );
}

export default App;
