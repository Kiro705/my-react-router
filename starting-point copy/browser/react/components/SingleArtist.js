import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {

  constructor(props){
    super(props);
    this.state = {
      artisitInfo: []
    }
  }

  componentDidMount () {
    const artistPromise = axios.get(`/api/artists/${this.props.match.params.artistId}`)
    .then(res => res.data);
    const albumsPromise = axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
    .then(res => res.data);
    const songsPromise = axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
    .then(res => res.data);

  Promise.all([artistPromise, albumsPromise, songsPromise])
    .then((results) => this.setState({artisitInfo : results}));
  }

  render () {
    if (this.state.artisitInfo.length){
      console.log(this.state.artisitInfo);
      const artist = this.state.artisitInfo[0];
      const albums = this.state.artisitInfo[1];
      const songs = this.state.artisitInfo[2];

      return (
        <div>
          <h3>{artist.name}</h3>
          <h4>
            <AllAlbums albums = {albums} />
          </h4>
          <h4>
            <Songs songs={songs} />
          </h4>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
