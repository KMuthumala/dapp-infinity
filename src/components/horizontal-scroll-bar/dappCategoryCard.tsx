import "./dappCategoryCard.css";
import {DappCategoryAndOperations} from "../../definitions/single-box-details";

function DappCategoryCard({category,onClick,selectedCategory}:DappCategoryAndOperations) {

    return (
        <div onClick={()=>{ // @ts-ignore
            onClick(category)}} className={"dapp_category_card"+((category===selectedCategory)? " active_category":"")} >
            <div className={"dapp_category_card_logo"}></div>
            <div className={"dapp_category_card_label"}>{category}</div>
        </div>
    );
}
export default DappCategoryCard;


