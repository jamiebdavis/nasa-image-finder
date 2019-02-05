import React, { Component } from "react";
import axios from "axios";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import ImageResult from "../ImageResult/ImageResult";

class Search extends Component {
  state = {
    seachItem: "",
    images: []
  };

  componentDidMount() {
    this.handleImageSearch();
  }

  handleImageSearch = () => {
    axios
      .get("https://images-api.nasa.gov/search?q=moon")
      .then(res => this.setState({ images: res.data.collection.items }))
      .catch(err => console.log(err));
  };

  render() {
    const imageResults = this.state.images.map(image => {
      return (
        <ImageResult
          key={image.data[0].nasa_id}
          title={image.data[0].title}
          description={image.data[0].description}
          image={image.links[0].href}
        />
      );
    });

    return (
      <div>
        <TextField
          id="standard-name"
          label="Search For..."
          fullWidth={true}
          value={this.state.name}
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox checked={true} color="primary" />}
          label="Image"
        />
        <FormControlLabel
          control={<Checkbox checked={false} color="primary" />}
          label="Video"
        />

        {imageResults}
      </div>
    );
  }
}

export default Search;
