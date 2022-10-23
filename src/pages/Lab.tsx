import DappCardGrid from "../components/dapp-card-grid/dappcardGrid";
import ParticlesAnimation from "../components/fancy-items/Particles";
import NavBarComponent from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import React from "react";

function Lab() {
    return (
        <div className={"parent"}>
            <ParticlesAnimation/>
            <div>
                <div>
                    <NavBarComponent/>
                </div>
                <div><DappCardGrid/></div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>

    );
}
export default Lab;