import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const LatestP = ({latestPImg}) =>{

    
    const repeat = latestPImg.map((Mylist, index ) =>

        <div className = "col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className = "f_p_item ">
                <div className = "f_p_img">
                    <img className = " img-fluid " src = {latestPImg[index].url} alt = " " />
                    <div className = "p_icon">
                        <Link to= "/valoracion" > <i className = " lnr lnr-heart "></i></Link>
                        <Link to= "/detallesdelProducto" > <i className = " lnr lnr-cart "></i></Link>
                    </div>
                </div>
                <Link to="/categories/"><h4> {latestPImg[index].name} </h4></Link>
                <h5> {latestPImg[index].price} </h5>
            </div>
        </div>
        
    )  

    return(
        <div className="latest_product_inner row">
            {repeat}
        </div>
   ) 
}

const mapStateToProps = state =>({
    latestPImg : state.lpReducer
})

export default connect(mapStateToProps, {})(LatestP)