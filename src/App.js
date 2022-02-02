import React from 'react';
import './App.css';
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";

let App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <Dialogs/>
        </div>
    );
}

export default App;
