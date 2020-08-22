import React from 'react'


/*------------------- Imported images ------------------*/

import img1 from '../plantilla/img/instagram/Image-01.jpg'
import img2 from '../plantilla/img/instagram/Image-02.jpg'
import img3 from '../plantilla/img/instagram/Image-03.jpg'
import img4 from '../plantilla/img/instagram/Image-04.jpg'
import img5 from '../plantilla/img/instagram/Image-05.jpg'
import img6 from '../plantilla/img/instagram/Image-06.jpg'
import img7 from '../plantilla/img/instagram/Image-07.jpg'
import img8 from '../plantilla/img/instagram/Image-08.jpg'


/*----------------------------------------------------- */

const FooterItem2 = () =>{
    return(
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget instafeed">
                <h6 className="footer_title">Instagram Feed</h6>
                <ul className="list instafeed d-flex flex-wrap">
                    <li><img src={img1} alt="Photo Instagram"/></li>
                    <li><img src={img2} alt="Photo Instagram"/></li>
                    <li><img src={img3} alt="Photo Instagram"/></li>
                    <li><img src={img4} alt="Photo Instagram"/></li>
                    <li><img src={img5} alt="Photo Instagram"/></li>
                    <li><img src={img6} alt="Photo Instagram"/></li>
                    <li><img src={img7} alt="Photo Instagram"/></li>
                    <li><img src={img8} alt="Photo Instagram"/></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterItem2