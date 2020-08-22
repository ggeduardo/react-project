import React from 'react';
import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom'


class TopSM extends React.Component {
	render(){
		return(
			<div className="top_menu row m0">
				<Container>
					<div className="float-left">
						<Link to = "/contact">
							komerzioSupport@gmail.com 
						</Link>
						<Link to ="/">
							Bienvenido a Komerzio.io 
						</Link>
					</div>
					<div className="float-right">
						<ul className="header_social">
							<li><Link to="/facebook.com/"><i className="fa fa-facebook"></i></Link></li>
							<li><Link to="/instagram.com/"><i className="fa fa-twitter"></i></Link></li>
							<li><Link to="/instagram.com/"><i className="fa fa-dribbble"></i></Link></li>
							<li><Link to="/instagram.com/"><i className="fa fa-behance"></i></Link></li>
						</ul>
					</div>
				</Container>
			</div>
		)
	}
}
export default TopSM;
