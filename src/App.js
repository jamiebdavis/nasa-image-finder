import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import Container from "./components/Container/Container";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Container />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
