import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FilledInput from "@material-ui/core/FilledInput";
import Select from "@material-ui/core/Select";
import axios from "axios";

 import ImageResults from './imageResults';

class Search extends Component {
  state = {
    searchText: "",
    amount: 5,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11235562-700cbc0b55703053c919d11a5",
    images: []
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for Images"
          fullWidth={true}
        />
        <br />
        <Select
          style={{ minWidth: 200, textAlign: "center" }}
          value={this.state.amount}
          onChange={this.handleChange}
          input={<FilledInput name="amount" id="filled-amount-simple" />}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>

        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
