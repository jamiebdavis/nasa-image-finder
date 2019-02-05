import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";

class Container extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default Container;
