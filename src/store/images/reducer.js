import {datos} from '../../components/datos'

const initialState = {
    Slider : {
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        imagenes: datos.Slider
    }
}

const getWidth = () => window.innerWidth

 export const sliderReducer = (state = initialState, action) =>{
    if(action.type === "PREV_SLIDE"){
        if(state.Slider.activeIndex === 0){
            return{
                ...state,
                Slider : {
                    translate: (state.Slider.imagenes.length - 1) * getWidth(),
                    activeIndex: state.Slider.imagenes.length - 1,
                    transition: 0.45,
                    imagenes: datos.Slider
                } 
            }
        }else{
            return{
                ...state,
                Slider : {
                    translate: (state.Slider.activeIndex - 1) * getWidth(),
                    activeIndex: state.Slider.activeIndex - 1,
                    transition: 0.45,
                    imagenes: datos.Slider
                } 
            }
        }
    }else if(action.type === "NEXT_SLIDE"){
        if(state.Slider.activeIndex === state.Slider.imagenes.length - 1 ){
            return{
                ...state,
                Slider: {
                    translate: 0,
                    activeIndex: 0,
                    transition: 0.45,
                    imagenes: datos.Slider
                }
            }
        }
        else{
            return{
                ...state,
                Slider:{
                    translate: (state.Slider.activeIndex + 1) * getWidth(),
                    activeIndex: state.Slider.activeIndex + 1,
                    transition: 0.45,
                    imagenes: datos.Slider
                }
            }
        }

    }   
    return state   
}

