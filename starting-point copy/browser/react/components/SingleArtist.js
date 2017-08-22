import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import NoMatch from './NoMatch';
import { Switch, Link, NavLink, Route } from 'react-router-dom';

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
    .then((results) => this.setState({artisitInfo : results}))
    .catch(console.log);
  }

  render () {
    if (this.state.artisitInfo.length){
      console.log(this.state.artisitInfo);
      const artist = this.state.artisitInfo[0];
      const albums = this.state.artisitInfo[1];
      const songs = this.state.artisitInfo[2];

      return (
        <div>
          <h3>{ artist.name }</h3>
          <ul className="nav nav-tabs">
            <li><NavLink to={`/artists/${artist.id}/albums`} activeClassName="active">ALBUMS</NavLink></li>
            <li><NavLink to={`/artists/${artist.id}/songs`} activeClassName="active">SONGS</NavLink></li>
          </ul>

          {/* Routes will go here! */}
          <Switch>
            <Route exact path = '/artists/:artistId/albums' render={() => <AllAlbums albums={albums} /> } />
            <Route exact path = '/artists/:artistId/songs' render={() => <Songs songs={songs} /> } />
            <Route path = '*' component = {NoMatch} />
          </Switch>
        </div>
      );
    } else {
      return <div>Not Found!</div>;
    }
  }
}
