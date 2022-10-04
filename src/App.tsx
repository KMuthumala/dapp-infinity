import React from 'react';
import './App.css';
import NavBarComponent from "./components/navBar/navbar";
import CardGrid from "./components/cardGrid/cardGrid";

function App() {
    return (<React.Fragment>
            <div>
                <NavBarComponent/>
            </div>
            <div>
                <div className="background_image01">
                    <div className="main_heading_section">
                        <h1>Explore & Enjoy <br/>
                            Dapps</h1>
                    </div>
                    <div className="grid_section">
                        <CardGrid/>
                    </div>
                </div>
            </div>
        </React.Fragment>);
}
export default App;
