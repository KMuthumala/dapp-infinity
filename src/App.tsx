import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Dapps from "./pages/Dapps";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/lab' element={<Lab/>}/>
                <Route path='/dapps' element={<Dapps/>}/>
            </Routes>
        </React.Fragment>);
}

export default App;
