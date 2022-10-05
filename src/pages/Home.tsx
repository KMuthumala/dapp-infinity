import CardGrid from "../components/card-grid/cardGrid";
import NavBarComponent from "../components/navbar/navbar";
import React from "react";
import BoxGrid from "../components/box-grid/boxgrid";

function Home() {
    return (
        <div className={"parent"}>
            <div className="background_image01">
                <div>
                    <NavBarComponent/>
                </div>
                <div className="main_heading_section">
                    <h1>Explore & Enjoy <br/>
                        Dapps</h1>
                </div>
                <div className="card_grid_section">
                    <CardGrid/>
                </div>
                <div className="box_grid_section">
                    <BoxGrid/>
                </div>

            </div>
        </div>

    );
}
export default Home;