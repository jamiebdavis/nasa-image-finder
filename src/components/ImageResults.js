import React, { Component } from "react";

class ImageResults extends Component {
  state = {};
  render() {
    const { images } = this.props;

    let imageResultCount;

    for (let i = 0; i < images.length; i++) {
      let obj = images[i].links[i].href;
      console.log(obj);
    }

    return <div>{imageResultCount}</div>;
  }
}

export default ImageResults;
