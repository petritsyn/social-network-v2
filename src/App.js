import React from 'react';
import './App.css';
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

let App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
