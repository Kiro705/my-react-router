import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleAlbum extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedAlbum: {}
    }
  }

  componentDidMount () {
    axios.get(`/api/albums/${this.props.match.params.albumId}`)
      .then(res => res.data)
      .then(selectedAlbum => {
        this.setState({ selectedAlbum })
      })
      .catch(console.log);
  }



  render () {
    const album = this.state.selectedAlbum;
    const func = function(){
      window.open("/albums", "newwindow", "height=1000, width=1000");
    };
    // console.log(album)
    if (album.name){
      return (
        <div className="album">
          <div>
            <h3>{ album.name }
              {/* <Link target = "_blank" to="/albums" onClick={func}> */}
              <button className="btn btn-primary" onClick={func}>
              <i className="fa fa-share-square-o"></i>
              </button>
              {/* </Link> */}
            </h3>
            <img src={ album.imageUrl } className="img-thumbnail" />
          </div>
          <Songs songs={ album.songs } />
        </div>
      );
    }
  else {
    return <div>Not Found!</div>;
  }
  }
}
