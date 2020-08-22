import React from 'react'
import { connect } from 'react-redux'

/* COMPONENTS ------------------------------*/

import RowSeached from './RowSearched.js'

/*------------------------------------------*/


const LastSearched = ({LSImg}) =>{

    const varToPrint = []

    const repeater =()=>{   
        for(var i = 0 ; i < LSImg.length - 1; i = i + 3){                 
            varToPrint.push(<RowSeached key = {i} Image1 = {LSImg[i]} Image2 = {LSImg[i+1]} Image3 = {LSImg[i+2]} />
            )}	
    }
    repeater()
  
    return(
        <section className = " most_product_area ">
            <div className = " main_box ">
                <div className = "container">
                    <div className = "main_title">
                        <h2> Lo más buscado </h2>
                        <p> Las busquedas más recientes hechas por los usuarios </p>
                    </div>
                    <div className="row most_product_inner">
                    {varToPrint}
                    </div>
                </div>
            </div> 
        </section>

    )
}
const mapStateToProps = state =>({
    LSImg : state.lsReducer
})

export default connect(mapStateToProps)(LastSearched)