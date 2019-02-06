import React, { Component } from "react";
import axios from "axios";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import ImageResult from "../ImageResult/ImageResult";

class Search extends Component {
  state = {
    searchItem: "",
    images: [],
    mediaTypeImage: false,
    mediaTypeAudio: false
  };

  componentDidMount() {
    //this.handleImageSearch();
  }

  handleSubmit = e => {
    this.handleImageSearch();
    e.preventDefault();
  };

  handleImageSearch = () => {
    axios
      .get(`https://images-api.nasa.gov/search?q=${this.state.searchItem}`)
      .then(res => this.setState({ images: res.data.collection.items }))
      .catch(err => console.log(err));
  };

  handlesearchItem = e => {
    this.setState({ searchItem: e.target.value });
  };

  handleChange = e => {
    this.setState({ [e.target.value]: e.target.checked });
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
          id="searchItem"
          label="Search For..."
          fullWidth={true}
          value={this.state.searchItem}
          margin="normal"
          onChange={this.handlesearchItem}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.mediaTypeImage}
              onChange={this.handleChange}
              value="mediaTypeImage"
            />
          }
          label="Image"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.mediaTypeAudio}
              onChange={this.handleChange}
              value="mediaTypeAudio"
            />
          }
          label="Audio"
        />
        <br />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Search
        </Button>
        <br />
        {imageResults}
      </div>
    );
  }
}

export default Search;
