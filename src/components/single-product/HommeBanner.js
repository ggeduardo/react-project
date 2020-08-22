import React from 'react'
import { Link } from 'react-router-dom'

const HommeBanner = (props) =>{
    return(

        <section className="banner_area">
            <div className="banner_inner d-flex align-items-center">
				<div className="container">
					<div className="banner_content text-center">
                        <h2>{props.title}</h2>
						<div className="page_link">
							<Link to={props.to[0]}>{props.name[0]}</Link>
							<Link to={props.to[1]}>{props.name[1]}</Link>
							<Link to={props.to[2]}>{props.name[2]}</Link>
						</div>
					</div>
				</div>
            </div>
        </section>
    )
}

export default HommeBanner