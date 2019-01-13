import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { MuiThemeProvider } from "@material-ui/core";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
