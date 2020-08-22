import React from 'react'
import {connect} from 'react-redux'


import {ChosePage} from '../store/Pagination/action' 
import { Link } from 'react-router-dom'


const PaginationProduct = ({ChosePage,datos}) =>{

    const reference = []
    const ref = React.createRef()   

    const Styles  = ["page-item active","page-item","page-item","page-item blank","page-item"]
    const txtJXS = []
    
    const List = () =>{
        for( var i = 0; i < datos.pagination.length ; i++){
                reference.push(React.createRef())
                let aux = reference.length - 1
                txtJXS.push(
                    <li className={Styles[i]}  onClick={()=>ChosePage("NUMBER",reference[aux].current.innerText)} ref={ref} key={i}>
                        <Link to={"/categories"} className="page-link" ref={reference[i]}>
                            {datos.pagination[i]}
                        </Link>
                    </li>)
            
        }
        reference.push(React.createRef())
        reference.push(React.createRef())
    }
    List()
    
    
    return(
        <div className="right_page ml-auto" >
            <nav className="cat_page" aria-label="Page navigation example">
                <ul className="pagination" >
                    <li className="page-item" onClick={()=>ChosePage(reference[5].current.id)} ref={reference[5]} id="left"><Link to="/categories" className="page-link" ><i className="fa fa-long-arrow-left" aria-hidden="true" ></i></Link></li>
                        {txtJXS}
                    <li className="page-item" onClick={()=>ChosePage(reference[6].current.id)} ref={reference[6]} id="right"><Link to="/categories" className="page-link" ><i className="fa fa-long-arrow-right" aria-hidden="true" ></i></Link></li>
                </ul>
            </nav>
        </div>
    )
}
const mapStateToProps = state =>({
    datos : state.PAGReducer
})

export default connect(mapStateToProps,{ChosePage})(PaginationProduct)