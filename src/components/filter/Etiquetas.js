import React, {createRef} from 'react'
import {connect} from 'react-redux'

import {ActiveTag} from '../../store/Filter/action'
import { Link } from 'react-router-dom'

const Etiquetas = ({data, ActiveTag}) => {
    
    const txtToPrint = []
    const ref = []
    
    const repeater = () =>{

        data.forEach((element, index) => {

            let lis = []
            element.options.forEach((e, i)=>{
                ref.push(createRef())
                var aux = ref.length - 1
                lis.push(
                    <li key={i} className={element.OptionStyles[i]} ref={ref[aux]} onClick={()=>(ActiveTag(ref[aux].current.innerText, "Child"))}>
                        <Link to="/categories">{e}</Link>
                    </li>
                )
            })
                ref.push(createRef())
                var aux = ref.length - 1
                txtToPrint.push(
                <li className={element.style} key={index}  > 
                    <Link to="/categories" ref={ref[aux]} onClick={()=>(ActiveTag(ref[aux].current.innerText,"Father"))}>{element.tag}</Link>
                    <ul className="list">
                        {lis}
                    </ul>
                </li>
            )
        })

    }

    repeater()
    
    
    return(
        <aside className="left_widgets cat_widgets">
            <div className="l_w_title">
                <h3> ETIQUETAS </h3>
            </div>
            <div className="widgets_inner">
                <ul className="list">
                    {txtToPrint}
                </ul>
            </div>
        </aside>
    )
}
const props = state =>({
    data: state.FilterReducer.Etiquetas
})

export default connect(props,{ActiveTag})(Etiquetas)