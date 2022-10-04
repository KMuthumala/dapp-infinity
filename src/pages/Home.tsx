import CardGrid from "../components/card-grid/cardGrid";

function Home() {
    return (
        <div>
            <div className="background_image01">
                <div className="main_heading_section">
                    <h1>Explore & Enjoy <br/>
                        Dapps</h1>
                </div>
                <div className="grid_section">
                    <CardGrid/>
                </div>
            </div>
        </div>

    );
}
export default Home;