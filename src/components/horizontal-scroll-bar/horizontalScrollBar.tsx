import "./horizontalScrollBar.css";
import DappCategoryCard from "./dappCategoryCard";
import categoryList from "../../data/dappCategories.json"
import {DappCategoryAndOperations} from "../../definitions/single-box-details";

function HorizontalScrollBar({handleClick,selectedCategory}:DappCategoryAndOperations) {
    const dappCategoryList:string[]=["All",...categoryList.dappCategories];
    return (
        <div className={"horizontal_Scroll_bar_wrapper"}>
                {dappCategoryList.map((e)=>{
                    return <div key={e} ><DappCategoryCard category={e} onClick={handleClick} selectedCategory={selectedCategory}/></div>
                })}
        </div>


    );
}


export default HorizontalScrollBar;