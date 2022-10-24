import CardGrid from "../components/card-grid/cardGrid";
import NavBarComponent from "../components/navbar/navbar";
import React from "react";
import BoxGrid from "../components/box-grid/boxgrid";
import Footer from "../components/footer/footer";
import ParticlesAnimation from "../components/fancy-items/Particles";
import PriceLine from "../components/price-line/price-line";


function Home() {
    return (
        <div className={"parent"}>
            <ParticlesAnimation/>
            <div>
                <div>
                    <NavBarComponent/>
                </div>
                <PriceLine/>
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
                <div>
                    <Footer/>
                </div>
            </div>
        </div>

    );
}

export default Home;