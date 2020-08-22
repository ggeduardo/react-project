import React from 'react'
import LatestP from './LatestP.js'


const LatestProduct = () => {

  
    return(
        <section className="feature_product_area latest_product_area">
            <div className="main_box">
                <div className="container">
                    <div className="feature_product_inner">
                        <div className="main_title">
                            <h2> Ultimos Productos Añadidos </h2>
                            <p>  Para Los Jovenes De La Casa </p>
                        </div>
                        
                        <LatestP/>                            
                        
                    </div>
                </div>
            </div>
        </section>   
    )
}
export default LatestProduct