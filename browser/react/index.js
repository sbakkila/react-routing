import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import axios from 'axios';

import AppContainer from './containers/AppContainer';
import initialState from './initialState';
import AUDIO from './audio';
import Albums from './components/Albums.js';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Artists from './components/Artists';
import Artist from './components/Artist';


import { convertAlbum, convertAlbums, skip } from './utils';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} >
      <IndexRedirect to="/albums" />
      <Route path='albums' component={Albums} />
      <Route path="albums/:albumId" component={Album} />
      <Route path="artists" component={Artists} />
      <Route path="artist/:artistId" component={Artist} />

    </Route>
  </Router>,
  document.getElementById('app')
);
