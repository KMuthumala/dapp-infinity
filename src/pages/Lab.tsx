import DappCardGrid from "../components/dapp-card-grid/dappcardGrid";
import ParticlesAnimation from "../components/fancy-items/Particles";
import NavBarComponent from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import React from "react";
import HorizontalScrollBar from "../components/horizontal-scroll-bar/horizontalScrollBar";

function Lab() {
    return (
        <div className={"parent"}>
            <div><ParticlesAnimation/></div>
            <div><HorizontalScrollBar/></div>


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