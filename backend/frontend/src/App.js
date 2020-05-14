//iTunes Store App Search allows user to search for a particular media type item
//User selects either Music, Music Videos, Movies or Audio Books and then types in 
//the name of the media they are looking for.  The results are displayed and the user
//can add items to a list of Favorites for future reference

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Navbar from './components/navbar';
import Home from './components/home';
import Music from './components/music';
import Videos from './components/videos';
import Movies from './components/movies';
import AudioBooks from './components/audio-books';
import Favorites from './components/favorites';

function App() {
  return (
    <div className = "App">
      <Router>
        <Navbar />
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/music" exact component = {Music} />
          <Route path = "/videos" exact component = {Videos} />
          <Route path = "/movies" exact component = {Movies} />
          <Route path = "/audiobooks" exact component = {AudioBooks} />
          <Route path = "/favorites" exact component = {Favorites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;