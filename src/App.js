import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/user/:id" component={User} />
            <Route component={CatchAll} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
