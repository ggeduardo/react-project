import React from 'react';
import DropdownMenu from './DropdownMenu.js';
import MenuDN from './MenuDN.js';
import Container from 'react-bootstrap/Container';
import Logo from '../plantilla/img/logo.png';

import {Link} from 'react-router-dom'

class MMenu1 extends React.Component {
	render(){
		return(
			<div className="main_menu">
				<nav className="navbar navbar-expand-lg navbar-light main_box">
					<Container>
						<Link className="navbar-brand logo_h" to="/">
							<img src={Logo} alt="Logo"/>
						</Link>
							<div className="navbar-toggler" >
									<DropdownMenu />
							</div>
						<MenuDN  />
						 

					</Container>
				</nav>
			</div>

		)
	}
}
export default MMenu1;