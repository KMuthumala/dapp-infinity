import React, {useState} from "react";
import DappCardGrid from "../components/dapp-card-grid/dappcardGrid";
import ParticlesAnimation from "../components/fancy-items/Particles";
import NavBarComponent from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HorizontalScrollBar from "../components/horizontal-scroll-bar/horizontalScrollBar";

function Dapp() {

    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const handleClick = (selected: string) => {
        if (selected !== selectedCategory) setSelectedCategory(selected);
    };

    return (
        <div className={"parent"}>
            <div><ParticlesAnimation/></div>
            <div><HorizontalScrollBar handleClick={handleClick} selectedCategory={selectedCategory}/></div>
            <div>
                <div><NavBarComponent/></div>
                <div><DappCardGrid category={selectedCategory}  /></div>
            </div>
            <div><Footer/></div>
        </div>

    );
}

export default Dapp;