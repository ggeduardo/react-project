import React from 'react'


const FooterItem1 = () =>{
    return(
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
                <h6 className="footer_title">¿Quieres recibir notificaciones?</h6>
                <p>Enterate de las ultimas ofertas en un segundo.</p>		
                <div id="mc_embed_signup">
                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                        <div className="input-group d-flex flex-row">
                            <input name="EMAIL" placeholder="Email Address" required="" type="email" />
                            <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>		
                        </div>									
                        <div className="mt-10 info"></div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FooterItem1


