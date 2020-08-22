import React from 'react';
import OpcionesDd from './OpcionesDd.js'
import {datos} from './datos.js'

import {Link} from 'react-router-dom'


class MenuDN extends React.Component {

	render(){
		return(
			<div className="collapse navbar-collapse " id="navbarSupportedContent">
				<ul className="nav navbar-nav menu_nav ml-auto">
					<li className="nav-item active"><Link to="/" className="nav-link"  >{datos.MenuDN[0]}</Link></li> 
					<OpcionesDd Title="Tienda" url="/categories" listUrl = {datos.MenuDN[5].url1} NameItems={datos.MenuDN[1]} NumItems={datos.MenuDN[1].length} /> 
					<OpcionesDd Title="Blog" url="/Blog" listUrl = {datos.MenuDN[5].url2} NameItems={datos.MenuDN[2]} NumItems={datos.MenuDN[2].length} /> 
					<OpcionesDd Title="Perfil" url="/Perfil" listUrl = {datos.MenuDN[5].url3} NameItems={datos.MenuDN[3]} NumItems={datos.MenuDN[3].length} /> 
					<OpcionesDd Title="Contact"  url="/Cantact"   NumItems={0} /> 
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item"><Link to="/" className="cart"><i className="lnr lnr lnr-cart"></i></Link></li>
					<li className="nav-item"><Link  to="/" className="search"><i className="lnr lnr-magnifier"></i></Link></li>
				</ul>
			</div>
		)

	}
}

export default MenuDN;