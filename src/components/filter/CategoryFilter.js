import React, {createRef} from 'react'
import {connect} from 'react-redux'

import {ListActive} from '../../store/Filter/action'
import { Link } from 'react-router-dom'

const CategoryFilter = ({Filter, ListActive}) => {

    const ref = [] 
    const txtToPrint = []
    

    const txtRepeater = () =>{

        Filter.forEach( (filter, index ) => { 

            let txtLi = []

            filter.options.forEach((option, ind)=>{

            ref.push(createRef())

            var aux = ref.length - 1

            txtLi.push
            (
            <li className={filter.styles[ind]} key = { ind } ref = {ref[aux]} onClick={()=>(ListActive(ref[aux].current.innerText, index))}>
                <Link to ="categories">{option}</Link>
            </li>)
            })
            txtToPrint.push(
                <div className="widgets_inner" key={index}>
                    <h4>{filter.category}</h4>
                    <ul className="list">
                        {txtLi}
                    </ul>
                </div>
            )

        });
    }
    txtRepeater()

    return( 
        <aside className="left_widgets p_filter_widgets">
            <div className="l_w_title">
                <h3>BUSCAR TAMBIEN POR</h3>
            </div>
            {txtToPrint}
        </aside>
        )
    
}

const mapStateToProps = state =>({
    Filter : state.FilterReducer.Filter
})

export default connect(mapStateToProps,{ListActive})(CategoryFilter)