import React, {Fragment} from 'react';

/* Imported components ......................................... */

import Sec1 from './components/Sec1.js'
import Sec2 from './components/Sec2.js'
/*import Timer from './components/Timer.js'*/
import LatestProduct from './components/LatestProducts.js'
import ClientLogo from './components/ClientLogo.js'
import LastSearched from './components/LastSearched.js'


/*.............................................................. */

const MainPage = () =>{

    return(
        <Fragment>
            <Sec1 />  
		    <Sec2 /> 
		    <LatestProduct/>
		    <ClientLogo/>
		    <LastSearched/>
        </Fragment>
    )
}

export default MainPage