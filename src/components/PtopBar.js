import React from 'react'

/*---------------------COMPONENTS------------------------*/ 

import LeftDorp from './LeftDorp.js'
import PaginationProduct from './PaginationProduct.js'

/* ----------------------------------------------------- */

const PtopBar = (props) => {
    return(
        <div className= " product_top_bar ">
            <LeftDorp />
            <PaginationProduct/>
        </div>
    )
}

export default PtopBar 