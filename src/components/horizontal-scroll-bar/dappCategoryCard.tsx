import "./dappCategoryCard.css";
import {DappCategory} from "../../definitions/single-box-details";

function DappCategoryCard({category}:DappCategory) {
    return (
        <div className={"dapp_category_card"}>
            <div className={"dapp_category_card_logo"}></div>
            <div className={"dapp_category_card_label"}>{category}</div>
        </div>
    );
}


export default DappCategoryCard;