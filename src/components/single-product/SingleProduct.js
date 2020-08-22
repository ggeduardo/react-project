import React, {createRef, useState} from 'react'
import { Link } from 'react-router-dom'


const SingleProduct = (props) =>{

    const InputRef = createRef()
    const [Styles, setStyles] = useState({indicators:["","","active"], inner:["carousel-item ","carousel-item ","carousel-item active"]})
    const txt1 = []
    const txt2 = []

    const ImageView = (index) =>{
        switch (index) {
            case 0:
                setStyles({indicators:["active","",""],inner:["carousel-item active","carousel-item ","carousel-item "]})
                break;
            case 1:
                setStyles({indicators:["","active",""],inner:["carousel-item ","carousel-item active","carousel-item "]})
                break;
            case 2:
                setStyles({indicators:["","","active"],inner:["carousel-item ","carousel-item ","carousel-item active"]})
                break;
        
            default:
                setStyles({indicators:["","","active"], inner:["carousel-item ","carousel-item ","carousel-item active"]})
                break;
        }
    }

    const Repeater = () =>{
        props.imagenes.forEach((e, i)=>{
            txt1.push(                                    
            <li className={Styles.indicators[i]} key={i} onClick={()=>{ImageView(i)}}>
                <img src={e} alt={props.name + i} width="60px" height="60px"/>
            </li>)
            txt2.push(
            <div className={Styles.inner[i]} key={i}>
                <img className="d-block w-100" src={e} alt={props.name + i} width="460px" height="460px" />
            </div>
            )
        })

    }
    Repeater()
    

    const Change = (direction) =>{
        if(direction==="UP"){
            InputRef.current.value++ 
        }else if(direction==="DOWN"){
            if(parseInt(InputRef.current.value) !== 1 ){
            InputRef.current.value--
            }
        }
    }

    return(
        <div className="product_image_area">
            <div className="container">
                <div className="row s_product_inner">
                    <div className="col-lg-6">
                        <div className="s_product_img">
                            <div className="carousel slide">
                                <ol className="carousel-indicators">
                                    {txt1}
                                </ol>
                                <div className="carousel-inner">
                                    {txt2}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="s_product_text">
                            <h3>{props.name}</h3>
                            <h2>{props.price}</h2>
                            <ul className="list">
                                <li><Link className="active" to="/categories"><span>Category</span> : {props.tag}</Link></li>
                                <li><Link to="/detallesdelProducto"><span>Availibility</span> : {props.availibility}</Link></li>
                            </ul>
                            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>
                            <div className="product_count">
                                <label >Quantity:</label>
                                <input type="text" defaultValue="1" title="Quantity:" className="input-text qty" ref={InputRef}/>
                                <button  className="increase items-count" type="button"><i className="lnr lnr-chevron-up" onClick={()=>{Change("UP")}}></i></button>
                                <button  className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"onClick={()=>{Change("DOWN")}}></i></button>
                            </div>
                            <div className="card_area">
                                <Link className="main_btn" to="/revision">Añadir al carro</Link>
                                <Link className="icon_btn" to="/detallesdelProducto"><i className="lnr lnr lnr-diamond"></i></Link>
                                <Link className="icon_btn" to="/detallesdelProducto"><i className="lnr lnr lnr-heart"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct