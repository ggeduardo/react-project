import React from 'react';
import Imagen from '../plantilla/img/banner/helmat.png';

import {Link} from 'react-router-dom'

class Sec1 extends React.Component {

	render(){
		return(
      	<section className="home_banner_area">
         	<div className="banner_inner d-flex align-items-center">
				<div className="container">
					<div className="banner_content row">
						<div className="col-lg-5">
							<h3>KOMERZIO.IO Te trae las Mejores<br />Colecciones!</h3>
							<p> Productos de alta calidad, de un increible precio al alcance de un click. Si necesitas vender algo o comprar algo y no sabes donde este es el sitio indicado que andabas buscando.</p>
							<Link className="white_bg_btn" to="/categories">Ver Coleccion</Link>
						</div>
						<div className="col-lg-7">
							<div className="halemet_img">
								<img src={Imagen} alt="" />
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>  
		)

	}
}
export default Sec1;
