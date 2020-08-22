import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Comments from './Comments'



const DescriptionArea = ({comments}) =>{

    
    const descriptionTest= [
        {name: "Alto", value: "125cm"},
        {name: "Ancho", value: "125cm"},
        {name:"Profundidad",value:"85cm"},
        {name:"Weight", value:"1kg"},
        {name:"Marca", value:"Razor"},
        {name:"Uso", value:"Nuevo"},
        {name:"Envio", value:"Usted lo paga señora"}]

    const [Styles,setStyles] = useState({
        tabs:["nav-link active","nav-link","nav-link","nav-link "], 
        tabsName:["Descripcion","Especifiacion","Comentarios","Reseñas"],
        ActiveStyles:["tab-pane fade show active","tab-pane fade ","tab-pane fade ","tab-pane fade "]
    })

    const items = []
    const TxtDescription = []

    const ClickTabs = (index) =>{
        switch (index) {
            case 0:
                setStyles({
                    tabs:["nav-link active","nav-link","nav-link","nav-link"], 
                    tabsName:["Descripcion","Especifiacion","Comentarios","Reseñas"],
                    ActiveStyles:["tab-pane fade show active","tab-pane fade ","tab-pane fade ","tab-pane fade "] 
                })
                break;
            case 1:
                setStyles({
                    tabs:["nav-link ","nav-link active","nav-link","nav-link"], 
                    tabsName:["Descripcion","Especifiacion","Comentarios","Reseñas"],
                    ActiveStyles:["tab-pane fade ","tab-pane fade show active","tab-pane fade ","tab-pane fade "] 
                })
                break;
            case 2:
                setStyles({
                    tabs:["nav-link ","nav-link ","nav-link active","nav-link"], 
                    tabsName:["Descripcion","Especifiacion","Comentarios","Reseñas"],
                    ActiveStyles:["tab-pane fade ","tab-pane fade ","tab-pane fade show active","tab-pane fade "]  
                })
                break;
            case 3:
                setStyles({
                    tabs:["nav-link ","nav-link ","nav-link ","nav-link active"], 
                    tabsName:["Descripcion","Especifiacion","Comentarios","Reseñas"],
                    ActiveStyles:["tab-pane fade ","tab-pane fade ","tab-pane fade ","tab-pane fade show active"]  
                     
                })
                break;
            default:
                break;
        }
    }

    const repeater = () =>{
        Styles.tabs.forEach( (e,i) =>{
            items.push(
                <li className="nav-item" key={i} onClick={()=>ClickTabs(i)}>
                    <Link className={e} to="/detallesdelProducto"  >{Styles.tabsName[i]}</Link>
                </li>
            )
        })
        descriptionTest.forEach((e,i)=>{
            TxtDescription.push(
                <tr key={i}>
                    <td>
                        <h5>{e.name}</h5>
                    </td>
                    <td>
                        <h5>{e.value}</h5>
                    </td>
                </tr>
            )
        })
    }

    repeater()

    return(
        <section className="product_description_area">
            <div className="container">
                <ul className="nav nav-tabs" >
                    {items}
                </ul>
                <div className="tab-content">
                    <div className={Styles.ActiveStyles[0]}>
                        <p>Montar un PC gaming es la mejor opción para rentabilizar al máximo la inversión, adecuar el equipo a nuestras necesidades y lograr un ordenador que no quede totalmente obsoleto con los nuevos avances tecnológicos. Por lo general, interesa que el equipo resultante pertenezca al menos a la gama media, los modelos muy baratos tienen demasiadas limitaciones y no salen rentables a medio y largo plazo. Por otro lado, si lo que se quiere es fiabilidad y pocos sobresaltos, interesa también prescindir de componentes de segunda mano, pues tienen una tasa de fallo mucho mayor</p>
						<p>Aquellos que nunca han montado un PC pueden sentirse abrumados por la cantidad de información disponible en la red, tanto ellos como los usuarios con más experiencia seguramente agradezcan este artículo donde analizaremos los componentes más importantes, su rol y consejos para su selección a la hora de montar un PC gaming.</p>					
                    </div>
                    <div className={Styles.ActiveStyles[1]} >
						<div className="table-responsive">
							<table className="table">
								<tbody>
                                    {TxtDescription}
								</tbody>
							</table>
						</div>
					</div>
                    <div className={Styles.ActiveStyles[2]}>
                        <Comments data={comments}/>
                    </div>
                    <div className={Styles.ActiveStyles[3]}>
                        AQUI VAN LOS RESEÑAS BRO
                    </div>

                </div>
            </div>
        </section>
    )
} 

const mapStateToProps= (state) =>({
    comments:state.PAReducer.ImgChosen
})

export default connect(mapStateToProps)(DescriptionArea)