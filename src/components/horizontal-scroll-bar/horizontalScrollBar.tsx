import "./horizontalScrollBar.css";
import DappCategoryCard from "./dappCategoryCard";
import categoryList from "../../data/dappCategories.json"
import {HorizontalScrollBarInterface} from "../../definitions/single-box-details";

function HorizontalScrollBar({handleClick}:HorizontalScrollBarInterface) {
    const dappCategoryList:string[]=["All",...categoryList.dappCategories];
    return (
        <div className={"horizontal_Scroll_bar_wrapper"}>
                {dappCategoryList.map((e)=>{
                    return <div key={e} onClick={()=>handleClick(e)}><DappCategoryCard category={e}  /></div>
                })}
        </div>


    );
}


export default HorizontalScrollBar;