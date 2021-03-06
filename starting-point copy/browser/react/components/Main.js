import React, { Component } from 'react';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import NoMatch from './NoMatch';
import { Switch, HashRouter, Route } from 'react-router-dom';

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
            <div className="col-xs-2">
              <Sidebar deselectAlbum={this.deselectAlbum} />
            </div>
            <div className="col-xs-10">
              <Switch>
                <Route exact path = '/' component = {StatefulAlbums} />
                <Route exact path = '/albums' component = {StatefulAlbums} />
                <Route exact path = '/artists' component = {AllArtists} />
                <Route path = '/albums/:albumId' component = {SingleAlbum} />
                <Route path = '/artists/:artistId' component = {SingleArtist} />
                <Route path = '*' component = {NoMatch} />
              </Switch>
            </div>
          <Player />
        </div>
      </HashRouter>
    );
  }
}

// <SingleAlbum album={this.state.selectedAlbum} />
// <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
