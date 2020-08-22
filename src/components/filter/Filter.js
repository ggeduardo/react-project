import React from 'react'


/*---------------------COMPONENTS-----------------------*/

import CategoryFilter from './CategoryFilter'
import Etiquetas from './Etiquetas'

/*------------------------------------------------------*/


const Filter = () =>{
    return(
            <div className="left_sidebar_area">
                <Etiquetas/>
                <CategoryFilter/>
            </div>

    )
}

export default Filter