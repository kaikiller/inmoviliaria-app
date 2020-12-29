import React, { Component } from "react";
import ListaInmuebles from "./componets/views/listaInmuebles";
import MuiTehmeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Navbar from "./componets/layout/Navbar";
import NewUser from "./componets/login/NewUser"

class App extends Component {
  render() {
    return (
      <Router>
        <MuiTehmeProvider theme={theme}>
          <Navbar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
              <Route path="/auth/registro" exact component={NewUser}></Route>
            </Switch>
          </Grid>
        </MuiTehmeProvider>
      </Router>
    );
  }
}

export default App;
