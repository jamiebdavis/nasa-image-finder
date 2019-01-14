import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import ImageResults from "./ImageResults";

class Search extends Component {
  state = {
    searchItem: "",
    images: [],
    url: "https://images-api.nasa.gov/search?q=",
    mediaType: "images"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.url}${this.state.searchItem}
          `
        )
        .then(res => {
          this.setState({ images: res.data.collection.items });
        })
        .catch(err => console.log(err));
    });
  };

  handleMediaChange = e => {
    this.setState({ mediaType: e.target.value }, () => {
      axios
        .get(
          `${this.state.url}${this.state.searchItem}&media_type=${
            this.state.mediaType
          }`
        )
        .then(res => {
          this.setState({ images: res.data.collection.items });
        })
        .catch(err => console.log(err));
    });
  };

  render() {
    return (
      <div>
        <br />
        <TextField
          onChange={this.handleChange}
          name="searchItem"
          value={this.state.searchItem}
          placeholder="Search for..."
          fullWidth={true}
        />
        <br />

        <br />
        <FormControl>
          <InputLabel htmlFor="mediaType">Media Type</InputLabel>
          <Select
            value={this.state.mediaType}
            onChange={this.handleMediaChange}
          >
            <MenuItem value="image">Image</MenuItem>
            <MenuItem value="audio">Audio</MenuItem>
          </Select>
        </FormControl>
        <br />

        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
