
import React from 'react'
import {connect} from 'react-redux'

/*---------------------------- COMPONENTS ----------------------------*/

import HommeBanner from './components/single-product/HommeBanner'
import SingleProduct from './components/single-product/SingleProduct'
import DescriptionArea from './components/single-product/DescriptionArea'

/*--------------------------------------------------------------------*/

const DetailProduct = ({singleProductProps})=>{
    
    return(
        <React.Fragment>
            <HommeBanner name={["INICIO", "CATEGORIAS", "DETALLES"]} to={["/", "/categories", "/detallesdelProducto"]} title = "DETALLES DEL PRODUCTO" />
            <SingleProduct 
                imagenes={singleProductProps.images} 
                name={singleProductProps.name}
                price={singleProductProps.price}
                tag={singleProductProps.etiqueta}
                availibility={singleProductProps.availibility}
                />
            <DescriptionArea/>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    singleProductProps : state.PAReducer.ImgChosen
})
export default connect(mapStateToProps)(DetailProduct)