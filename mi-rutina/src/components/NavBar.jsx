import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <>
      <Navbar style={{backgroundColor: "#3A4B5C"}} data-bs-theme="dark">
        <Container>
          <div>
            <img src="public/logo.svg" alt="logo" />
          </div>
          <Navbar.Brand >
            <Nav.Link style={{fontFamily: "Holtwood One SC", fontSize: "32px"}} href='#home'>TU RUTINA</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">INICIO</Nav.Link>
            <Nav.Link href="#alumnos">ALUMNOS</Nav.Link>
            <Nav.Link href="#perfil">PERFIL</Nav.Link>
            <Nav.Link href="#ayuda">AYUDA</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
    </>
  )
}
