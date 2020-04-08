import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";

// Pages
import Homepage from "./pages/homepage";
import CatchAll from "./pages/catchall";
import User from "./pages/user";

// Mui
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { darkMode, lightMode } from "./util/themeFile";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    const lightTheme = createMuiTheme(lightMode);
    const darkTheme = createMuiTheme(darkMode);

    const currentTheme = localStorage.getItem("themeType") || "light";
    const [theme, setTheme] = useState(currentTheme);

    useEffect(() => {
        localStorage.setItem("themeType", theme);
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <CssBaseline />
            <Router>
                <Container maxWidth="lg">
                    <Nav handleThemeChange={handleThemeChange} theme={theme} />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/user/:id" component={User} />
                        <Route component={CatchAll} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
