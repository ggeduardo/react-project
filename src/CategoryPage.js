import React from 'react'

/* ------------------COMPONENTS----------------- */

import ProductArea from './components/ProductArea.js'
import CategoryHB from './components/CategoryHB.js' 

/* --------------------------------------------- */

const CategoryPage = () =>{

    return(
        <div>
            <CategoryHB/>
            <ProductArea/>
            
        </div>
    )
}

export default CategoryPage
