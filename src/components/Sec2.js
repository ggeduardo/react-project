import React from 'react' 
import Bn1 from './Bn1.js'
import Slider from './slider/Slider.js'

import Imagen1 from '../plantilla/img/product/hot-product/hot-p-11.jpg'
import Imagen2 from '../plantilla/img/product/hot-product/hot-p-2.jpg'

class Sec2 extends React.Component {
	render(){
		return(
			<section className="feature_product_area">
				<div className="main_box">
					<div className="container">
						<div className="row hot_product_inner">
							<Bn1 Src={Imagen1} Txt1="Lo Más Hot" Txt2="De" Txt3="Este Mes"/>
							<Bn1 Src={Imagen2} Txt1="Lo Más " Txt2="Vendido" Txt3="Este Mes"/>
						</div>
						<div className="feature_product_inner">
							<div className="main_title">
								<h2> PRODUCTOS DESTACADOS </h2>
								<p>Para los amantes de la moda en este verano te traemos lo más destacado</p>
							</div>
							<Slider />
						</div>	
					</div>
				</div>
			</section>
		)

	}
}
export default Sec2;



