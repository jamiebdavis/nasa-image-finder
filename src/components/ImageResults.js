import React, { Component } from "react";

class ImageResults extends Component {
  state = {};
  render() {
    const { images } = this.props;

    let imageResultCount;

    //console.log(imageResultCount);

    return <div>{imageResultCount}</div>;
  }
}

export default ImageResults;
