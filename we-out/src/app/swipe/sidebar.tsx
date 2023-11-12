import { Nav } from "react-bootstrap";

function Sidebar() {
  return (
    <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link href="#">Link 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Link 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Link 3</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;