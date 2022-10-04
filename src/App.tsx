import React from 'react';
import './App.css';
import NavBarComponent from "./components/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Lab from "./pages/Lab";

function App() {
    return (
        <React.Fragment>
            <div>
                <NavBarComponent/>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/lab' element={<Lab/>}/>
            </Routes>
        </React.Fragment>);
}

export default App;
