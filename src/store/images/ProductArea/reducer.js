import {datos} from '../../../components/datos'


const initialState = { 
    PADate :  datos.CPImages,
    ImgChosen : datos.PA
 }

export const PAReducer = (state = initialState, action) =>{
    if(action.type==="IMAGE_CHOSEN"){
        return({
            ...state,
            ImgChosen: action.img
        })
    }
    return state
}