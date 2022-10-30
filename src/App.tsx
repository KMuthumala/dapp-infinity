import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Dapps from "./pages/Dapps";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/lab' element={<Lab/>}/>
                <Route path='/dapps' element={<Dapps/>}/>
            </Routes>
        </BrowserRouter>);
}

export default App;
