import React from 'react'
import { Link } from 'react-router-dom'


const FooterItem3 = () =>{
    return(
        <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget f_social_wd">
                <h6 className="footer_title">Siguenos en </h6>
                <p>F/I/Be/W</p>
                <div className="f_social">
                    <Link to= "/facebook.com" ><i className="fa fa-facebook"></i></Link >
                    <Link to= "/twitter" ><i className="fa fa-twitter"></i></Link >
                    <Link to= "/instagram" ><i className="fa fa-dribbble"></i></Link >
                    <Link to= "/behance" ><i className="fa fa-behance"></i></Link >
                </div>
            </div>
        </div>	
        
    )
}

export default FooterItem3