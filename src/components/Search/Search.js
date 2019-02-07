import React, { Component } from "react";
import axios from "axios";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  GridListTile,
  GridListTileBar,
  GridList
} from "@material-ui/core";
import ImageCard from "../Dialogs/Dialog";

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
    let mediaType = null;

    if (this.state.mediaTypeImage && this.state.mediaTypeAudio) {
      mediaType = "&media_type=image,audio";
    } else {
      mediaType = "&media_type=image";
    }

    axios
      .get(
        `https://images-api.nasa.gov/search?q=${
          this.state.searchItem
        }${mediaType}`
      )
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
        <GridListTile key={image.data[0].nasa_id}>
          <img src={image.links[0].href} alt={image.data[0].title} />
          <GridListTileBar
            title={image.data[0].title}
            subtitle={
              <span>
                Date Created: {image.data[0].date_created.slice(0, 10)}
              </span>
            }
          />
        </GridListTile>
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

        <GridList cellHeight={300} cols={3} spacing={10}>
          {imageResults}
        </GridList>
      </div>
    );
  }
}

export default Search;
