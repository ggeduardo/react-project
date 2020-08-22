import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

/* ----------------COMPONENTS------------------------ */

import PtopBar from './PtopBar'
import CategoryProducts from './CategoryProducts.js'
import Filter from './filter/Filter.js'
import {ImgChosen} from '../store/images/ProductArea/Action'


/* -------------------------------------------------- */


const ProductArea = ({Data,Index, Amount,array,fil, ImgChosen}) =>{
    
    const nums = array
    let txtJXS = []
    
    const FilteredData = Data.filter((e,index)=>{
        /*console.log(" RANGO ",e.rango,fil.Clicked[3], "...", " POPULARIDAD", e.popularidad, fil.Clicked[2], "...", " LUGAR", e.lugar, fil.Clicked[1] )
        console.log("RANGO: ", e.rango === fil.Clicked[3], "POPULARIDAD: ",e.popularidad === fil.Clicked[2], "LUGAR: ", e.lugar === fil.Clicked[1], "TAG: ",e.tag === fil.Clicked[0]  )
        */
        
        if(e.tag === fil.Clicked[0]  && (e.lugar === fil.Clicked[1] || fil.Clicked[1] ==="CUALQUIERA") && (e.popularidad === fil.Clicked[2] || fil.Clicked[2] ==="CUALQUIERA") && (e.rango === fil.Clicked[3] || fil.Clicked[3] ==="CUALQUIERA")){
            return e.tag
        }
    })
    

    const Repeater = () =>{
        
        for(let i = 0 ; i < 3 ; i++){
            let j = 0
            txtJXS[i] = new Array()
                txtJXS[i][j] = new Array()
                FilteredData.forEach((datos, index) => {             
                    if (index < nums[i]*(j+1) ){               
                        let aux = index-(nums[i])*(j)
                        txtJXS[i][j][aux] = (
                            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                                <div className="f_p_item">
                                    <div className="f_p_img">
                                        <img className="img-fluid" src={datos.url} alt={datos.name}/>
                                        <div className="p_icon">
                                            <Link to="/valoracion"><i className="lnr lnr-heart"></i></Link>
                                            <Link to="/revision" ><i className="lnr lnr-cart"></i></Link>
                                        </div>
                                    </div>
                                    <Link to="/detallesdelProducto" onClick={()=>(ImgChosen(datos))}><h4>{datos.name}</h4></Link>
                                    <h5>{datos.price}</h5>
                                </div>
                            </div>
                        )
                        
                    }else{
                        j++
                        txtJXS[i][j] = new Array()
                        txtJXS[i][j][0]=(
                            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                                <div className="f_p_item">
                                    <div className="f_p_img">
                                        <img className="img-fluid" src={datos.url} alt={datos.name}/>
                                        <div className="p_icon">
                                            <Link to="/valoracion"><i className="lnr lnr-heart"></i></Link>
                                            <Link to="/detallesdelProducto"><i className="lnr lnr-cart"></i></Link>
                                        </div>
                                    </div>
                                    <Link to="/detallesdelProducto"><h4>{datos.name}</h4></Link>
                                    <h5>{datos.price}</h5>
                                </div>
                            </div>
                        )
                    }
                })
                
            
        } 
          
    }
    Repeater()

    const showItems = {text:txtJXS[Amount][Index[0]-1] }

    return(
        <section className = " cat_product_area p_120">
            <div className="container">
                <div className ="row flex-row-reverse">
                    <div className=" col-lg-9 ">
                        <PtopBar/>
                        <CategoryProducts TextToPrint = {showItems.text}/>
                    </div>
                    <div className=" col-lg-3">
                        <Filter/>
                    </div>
                </div>
            </div>
        </section>
    )

}

const mapFunction = state => ({
    Data : state.PAReducer.PADate,
    Index: state.PAGReducer.pagination,
    Amount: state.amountReducer.Amount,
    array : state.amountReducer.array,
    fil: state.FilterReducer
})

export default connect(mapFunction,{ImgChosen})(ProductArea)