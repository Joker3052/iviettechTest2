'use client'
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { useRouter } from "next/navigation";


function Header() {
  const router = useRouter();
  const aboutBtn = () => {
        router.push("/about");
  }
  const contactBtn = () => {
    router.push("/contact");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link href="/" style={{fontSize:36, fontWeight:700, marginRight:100, textDecoration:0, color:'black'}}>2P-Fashion</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="a" href="/" style={{ fontWeight: 700, textDecoration:0}}>Home</Link>
            <Link className="a" href="/about" style={{ fontWeight: 700, textDecoration:0 }}>About</Link>
            <Link className="a" href="/contact" style={{ fontWeight: 700, textDecoration:0 }}>Contact Us</Link>
          </Nav>
          <div className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;