import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"


function NavBarComponent() {
    const navbarTags=[
        {tag:"Dapps",to:"dapps"},
        {tag:"NFTs",to:"nft"},
        {tag:"AirDrops",to:"airdrops"},
        {tag:"Blog",to:"blogs"},
    ];

    return (
        <Navbar fixed={"top"} collapseOnSelect expand="lg"  variant="dark" className="navbar_settings">
            <Container >
                <Navbar.Brand   href="/">Dapp Infinity</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="ms-5 tags_styles" >
                        {navbarTags.map((e)=>(<Nav.Link key={e.tag} active={window.location.pathname==="/"+e.to} className="me-4" href={e.to}>{e.tag}</Nav.Link> ))}
                    </Nav>
                    {/*<Button className="button-secondary">Connect Wallet</Button>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBarComponent;