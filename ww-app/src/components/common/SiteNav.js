import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; // Import Button component

function SiteNav() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>WildFire Watch</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
              <Button variant="outline-light" className="ms-3" href="/login">
                Login
              </Button>
              <Button variant="outline-light" className="ms-3" href="/signup">
                Signup
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default SiteNav;
