import React from 'react';
import '../App.css';

//Home function -
//This is the screen the user will first see when opening the App, it welcomes and directs them on how to proceed
function Home() {
    return (
        <div className = "home-page">
            <h1 className = "welcome-text">Welcome to the iTunes Store Search App </h1>
            <h5 className = "instruct-text">Click on the media type above to start your search.</h5>
        </div>
    );
}

export default Home;