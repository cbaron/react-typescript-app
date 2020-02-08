import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import HelloWorld from "./views/HelloWorld";

type Props = {};

const theme = createMuiTheme({});

const App: React.FC<Props> = ({}) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <Switch>
            <Route path="/" component={HelloWorld} />
          </Switch>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
