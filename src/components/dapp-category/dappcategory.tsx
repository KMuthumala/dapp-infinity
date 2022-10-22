import "./dappcategory.css";


function DappCategory() {
    return (
        <div>
            <a href="#" id="nav-status">Open / Close</a>
            <ul id="navigation">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
                <li>
                    <a href="#">Item 5</a>
                    <ul>
                        <li><a href="#">Sub Item 1</a></li>
                        <li><a href="#">Sub Item 2</a></li>
                        <li><a href="#">Sub Item 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Item 6</a></li>
                <li><a href="#">Item 7</a></li>
            </ul>
        </div>
    );
}
export default DappCategory;