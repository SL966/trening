import React, {useState} from 'react';
import './App.css';
import NewComponent from "./NewComponentButton/NewComponent";
import Students from "./Students/Students";



const App = () => {

    return (
        <div className="App">
            <NewComponent />
            <Students />
        </div>
    );
}

export default App;
