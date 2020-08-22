import React from 'react'
import {Link} from 'react-router-dom'


class Bn1 extends React.Component{
	render(){
		return(
			<div className="col-lg-6">
				<div className="hot_p_item">
					<img className="img-fluid" src={this.props.Src} alt={this.props.Txt1+this.props.Txt2 + this.props.Txt3} />
					<div className="product_text">
						<h4>{this.props.Txt1} <br/> {this.props.Txt2} <br/>
						{this.props.Txt3}</h4>
						<Link to = "/categories" >COMPRAR</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Bn1