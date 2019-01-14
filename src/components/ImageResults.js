import React, { Component } from "react";

class ImageResults extends Component {
  state = {};
  render() {
    const { images } = this.props;

    let output = "";
    let img = [];

    for (let i = 0; i < 1; i++) {
      img = (
        <div>
          <img src={images[i].links[i].href} alt="" />
        </div>
      );
    }

    console.log(images[0].links[0].href);

    return (
      <div>
        {output} {img}
      </div>
    );
  }
}

export default ImageResults;
