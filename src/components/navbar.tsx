import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import {Button} from "react-bootstrap";

function NavBarComponent() {
    const navbarTags=[
        {tag:"Defi",to:"#defi"},
        {tag:"NFTs",to:"#nfts"},
        {tag:"Blog",to:"#blog"},
        {tag:"AirDrops",to:"#airdrops"},
    ];

    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbar_color">
            <Container className="navbar_brand">
                <Navbar.Brand  href="#home">Dapp Infinity</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-5" >
                        {navbarTags.map((e)=>(<Nav.Link key={e.tag} className="me-4 tags_styles" href={e.to}>{e.tag}</Nav.Link> ))}
                    </Nav>
                    <Button className="button-secondary">Connect Wallet</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;