import {createStore, combineReducers} from 'redux'

/*------------------------ REDUCERS------------------------ */

import {sliderReducer} from './images/reducer.js'
import { lpReducer } from './images/latestproducts/reducer'
import { CLReducer } from './images/clientLogo/reducer'
import { lsReducer } from './images/latestsearched/reducer'
import { PAReducer } from './images/ProductArea/reducer'
import { PAGReducer } from './Pagination/reducer'
import { amountReducer } from './leftDorp/reducer'
import { FilterReducer } from './Filter/reducer'

/* -------------------------------------------------------- */


const reducers = combineReducers({
    sliderReducer,
    lpReducer,
    CLReducer,
    lsReducer,
    PAReducer,
    PAGReducer,
    amountReducer,
    FilterReducer 
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

