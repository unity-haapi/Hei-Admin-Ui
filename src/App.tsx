import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewEvent from './Components/NewEvent';
import './App.css'
import Login from './Components/Login';

const App = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/NewEvent' element={<NewEvent/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
