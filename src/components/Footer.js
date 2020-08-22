import React from 'react'

/*--------------- Imported Componentes -----------------*/

import FooterItem1 from './FooterItems.js'
import FooterItem2 from './FooterItems2.js' 
import FooterItem3 from './FooterItems3.js' 


/*------------------------------------------------------*/


const Footer1 = () => {

    return(
        <footer className = " footer-area ">
            <div className = " container ">
                <div className = "row">
                    <div className = " col-lg-3  col-md-6 col-sm-6 ">
                        <div className="single-footer-widget">
                            <h6 className="footer_title">Acerca de nosotros</h6>
                            <p>Somos un grupo de personas que apoyamos el emprendemiento de las pequeñas, medianas y grandes empresas, ofreciendoles una plataforma flexible, agil y economica en el cual puedan ofrecer sus productos</p>
                        </div>
                    </div>
                    <FooterItem1/>
                    <FooterItem2/>
                    <FooterItem3/>
                </div>
                <div className="row footer-bottom d-flex justify-content-between align-items-center">
                    <p className="col-lg-12 footer-text text-center">Copyright ©2020 All rights reserved | KOMERZIO.IO</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer1