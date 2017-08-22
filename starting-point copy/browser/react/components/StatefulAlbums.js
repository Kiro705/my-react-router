import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AllAlbums from "./AllAlbums";

export default class StatefulAlbums extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }

  render () {

    return (
      <AllAlbums albums = {this.state.albums} />
    );
  }
}