import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



class DropdownMenu extends React.Component {
	render(){
		return(
			<Button variant="Info" className="navbar-toggler">
				<Navbar className="nav ">
				    <NavDropdown title="MENU" id="nav-dropdown">
				        <NavDropdown.Item eventKey="4.1" >Action</NavDropdown.Item>
				        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
				        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
				    </NavDropdown>
				<div>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>

				</div>
		      	</Navbar>
	
		    </Button>
			
		)
	}
}

export default DropdownMenu