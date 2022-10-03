import React from 'react';
import './App.css';
import NavBarComponent from "./components/navbar";
import GridSystem from "./components/gridSystem";

function App() {
    return (
        <div>
            <div>
                <NavBarComponent/>
            </div>
            <div>
                <div className="background_image01">
                    <div className="main_heading_section">
                        <h1>Explore & Enjoy <br/>
                            Dapps</h1>

                    </div>
                    {/*<div className="grid_section">*/}
                    {/*    <GridSystem/>*/}
                    {/*    /!*<GridSystem/>*!/*/}
                    {/*    /!*<GridSystem/>*!/*/}
                    {/*    /!*<GridSystem/>*!/*/}
                    {/*    /!*<GridSystem/>*!/*/}
                    {/*    /!*<GridSystem/>*!/*/}


                    {/*</div>*/}

                </div>


            </div>
        </div>
    );
}

export default App;
