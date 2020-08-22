import React from 'react'

import {Link} from 'react-router-dom'


const OpcionesDd = (props) => {
	const JSX = [];

	const ManejadorJSX = () => {
		for(let i  = 0 ;  i < props.NumItems ; i++ ){
			JSX.push(<li className="nav-item" key={i} ><Link to = {props.listUrl[i]} className="nav-link"  key={i} >{props.NameItems[i]}</Link></li>)
			
		}
	}
	ManejadorJSX()

		return(
			<li className="nav-item submenu dropdown" >
				<Link to={props.url} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{props.Title}</Link>
				<ul className="dropdown-menu">
					{JSX}
				</ul>
			</li>
		)

}


export default OpcionesDd