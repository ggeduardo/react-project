
const initialState = {
    Filter: [
        {category: "Lugar", options: ["EN LA ZONA","EN EL PAIS","CUALQUIERA"], styles: ["","","active"]},
        {category: "Popularidad", options: ["ALTA","MEDIA","BAJA","CUALQUIERA"], styles: ["","","","active"]},
        {category: "Precio", options: ["0 - 100 $","101 - 500 $","501 - 1000$","1001 - 5000$","MAYOR A 5000$", "CUALQUIERA"], styles: ["","","","","","active"]}],
    Etiquetas : 
        [
            {tag: "ROPA", options: ["CAMISAS","PANTALONES","ZAPATOS","INTERIOR", "ACCESORIOS."], OptionStyles:["active","","","",""], style:"off" },
            {tag: "COMIDA", options: [], OptionStyles:[], style:"off" },
            {tag: "TECNOLOGIA", options: ["COMPUTERS", "DOMESTICOS","TELEFONOS","ROBOTS"], OptionStyles:["","","",""], style:"off"},
            {tag: "JUEGOS", options: ["CONSOLAS","ACCESORIOS","POSTER"], OptionStyles:["","",""], style:"off"},
            {tag: "CARROS", options: ["REPUESTOS","MOTOS"], OptionStyles:["",""], style:"off"}
        ],
    Clicked: ["CAMISAS","CUALQUIERA","CUALQUIERA","CUALQUIERA"]
}

export const FilterReducer = (state = initialState, action) => {
    if(action.type === "CHANGE_STYLE"){
        let aux1 = 0
        let aux2 = 0
        state.Filter.forEach((filter, i)=>{
            filter.options.forEach((element, index)=>{
                if(action.li === element && i === action.index){
                    aux1 = i
                    aux2 = index
                }
            })
        })
        let ArrayAux = state.Filter[aux1].styles
        let index1 = ArrayAux.findIndex((element)=> 
            element === "active"
        )
        ArrayAux.splice(index1,1,"")
        ArrayAux.splice(aux2,1,"active")
        
        switch (aux1) {
            case 0:
                return {
                    ...state, 
                    Filter : 
                    [
                        {category: state.Filter[0].category, options:state.Filter[0].options, styles: ArrayAux },
                        state.Filter[1],
                        state.Filter[2]
                    ],
                    Clicked: [state.Clicked[0], action.li, state.Clicked[2], state.Clicked[3] ]
                }               
                
                
            case 1:
                return {
                    ...state, 
                    Filter : 
                    [
                        state.Filter[0],
                        {category: state.Filter[1].category, options:state.Filter[1].options, styles: ArrayAux },
                        state.Filter[2]
                    ],
                    Clicked: [state.Clicked[0], state.Clicked[1], action.li, state.Clicked[3] ]
                }                                  
                
            case 2:
                return {
                    ...state, 
                    Filter : 
                    [
                        state.Filter[0],
                        state.Filter[1],
                        {category: state.Filter[2].category, options:state.Filter[2].options, styles: ArrayAux },                      
                    ],
                    Clicked: [state.Clicked[0], state.Clicked[1],  state.Clicked[2], action.li ]
                }
            default:
                return state                                  
                
        }
    }
    else if(action.type === "CHANGE_TAG_STYLE"){
        if(action.childOrFather === "Father"){
            let aux2 = 0
            let aux3 = ""
            state.Etiquetas.forEach((e,i)=>{
                if(e.tag === action.tag){
                    aux2 = i
                   
                }
            })

            if(state.Etiquetas[aux2].style === "off" ){
                aux3 = "on" 
                
            }
            
            else if(state.Etiquetas[aux2].style === "on"){
                aux3 = "off"
                
            }

            switch (action.tag) {
                case state.Etiquetas[0].tag:
                    return{
                        ...state,
                        Etiquetas:
                            [
                                {tag: state.Etiquetas[0].tag, options: state.Etiquetas[0].options, OptionStyles:state.Etiquetas[0].OptionStyles, style:aux3 },
                                state.Etiquetas[1],
                                state.Etiquetas[2],
                                state.Etiquetas[3],
                                state.Etiquetas[4],
                               
                            ],
                          
                    }
                case state.Etiquetas[1].tag:
                    return{
                        ...state,
                        Etiquetas:
                            [
                                
                                state.Etiquetas[0],
                                {tag: state.Etiquetas[1].tag, options: state.Etiquetas[1].options, OptionStyles:state.Etiquetas[1].OptionStyles, style:aux3 },
                                state.Etiquetas[2],
                                state.Etiquetas[3],
                                state.Etiquetas[4],
                                   
                            ],
                              
                        }
                case state.Etiquetas[2].tag:
                    return{
                        ...state,
                        Etiquetas:
                            [
                                    
                                state.Etiquetas[0],
                                state.Etiquetas[1],
                                {tag: state.Etiquetas[2].tag, options: state.Etiquetas[2].options, OptionStyles:state.Etiquetas[2].OptionStyles, style:aux3 },
                                state.Etiquetas[3],
                                state.Etiquetas[4],
                                           
                            ],
                              
                        }
                case state.Etiquetas[3].tag:
                    return{
                        ...state,
                        Etiquetas:
                            [
                                    
                                state.Etiquetas[0],
                                state.Etiquetas[1],
                                state.Etiquetas[2],
                                {tag: state.Etiquetas[3].tag, options: state.Etiquetas[3].options, OptionStyles:state.Etiquetas[3].OptionStyles, style:aux3 },
                                state.Etiquetas[4],
                                           
                            ],
                             
                        }
                case state.Etiquetas[4].tag:
                    return{
                        ...state,
                        Etiquetas:
                            [
                                    
                                state.Etiquetas[0],
                                state.Etiquetas[1],
                                state.Etiquetas[2],
                                state.Etiquetas[3],
                                {tag: state.Etiquetas[4].tag, options: state.Etiquetas[4].options, OptionStyles:state.Etiquetas[4].OptionStyles, style:aux3 },
                                           
                            ],
                             
                        }
              
                     
                default:
                    return state
                    
            }

        }else if (action.childOrFather==="Child"){

            
            let aux= []
            
            state.Etiquetas.forEach((element,index) =>{
                element.options.forEach((e,i)=>{
                    if(e === action.tag){
                        
                        aux =[index,i] 
                    }
                })
            })
            
            let aux2 = state.Etiquetas[aux[0]].OptionStyles.findIndex((e)=>e === "active")
            let TestArray = state.Etiquetas[aux[0]].OptionStyles
            if(aux2 !== -1){
                
                TestArray.splice(aux2,1,"")
                TestArray.splice(aux[1],1,"active")
            }
            else{
                TestArray.splice(aux[1],1,"active")
            }
            switch (aux[0]) {
                case 0:
                    return{
                        ...state,
                        Etiquetas: [
                            {tag: state.Etiquetas[0].tag, options: state.Etiquetas[0].options, OptionStyles:TestArray, style:state.Etiquetas[0].style },
                            {tag: state.Etiquetas[1].tag, options: state.Etiquetas[1].options, OptionStyles:[""], style:state.Etiquetas[1].style },
                            {tag: state.Etiquetas[2].tag, options: state.Etiquetas[2].options, OptionStyles:["","","",""], style:state.Etiquetas[2].style },
                            {tag: state.Etiquetas[3].tag, options: state.Etiquetas[3].options, OptionStyles:["","",""], style:state.Etiquetas[3].style },
                            {tag: state.Etiquetas[4].tag, options: state.Etiquetas[4].options, OptionStyles:["",""], style:state.Etiquetas[4].style },

                        ],
                        Clicked: [action.tag, state.Clicked[1],state.Clicked[2],state.Clicked[3]] 
                    }
                case 1:
                    return{
                        ...state,
                        Etiquetas: [
                            {tag: state.Etiquetas[0].tag, options: state.Etiquetas[0].options, OptionStyles:["","","","",""], style:state.Etiquetas[0].style },
                            {tag: state.Etiquetas[1].tag, options: state.Etiquetas[1].options, OptionStyles:TestArray, style:state.Etiquetas[1].style },
                            {tag: state.Etiquetas[2].tag, options: state.Etiquetas[2].options, OptionStyles:["","","",""], style:state.Etiquetas[2].style },
                            {tag: state.Etiquetas[3].tag, options: state.Etiquetas[3].options, OptionStyles:["","",""], style:state.Etiquetas[3].style },
                            {tag: state.Etiquetas[4].tag, options: state.Etiquetas[4].options, OptionStyles:["",""], style:state.Etiquetas[4].style },
                        ],
                        Clicked: [action.tag, state.Clicked[1],state.Clicked[2],state.Clicked[3]]
                    }
                
                case 2:
                    return{
                        ...state,
                        Etiquetas: [
                            {tag: state.Etiquetas[0].tag, options: state.Etiquetas[0].options, OptionStyles:["","","","",""], style:state.Etiquetas[0].style },
                            {tag: state.Etiquetas[1].tag, options: state.Etiquetas[1].options, OptionStyles: [], style:state.Etiquetas[1].style },
                            {tag: state.Etiquetas[2].tag, options: state.Etiquetas[2].options, OptionStyles:TestArray, style:state.Etiquetas[2].style },
                            {tag: state.Etiquetas[3].tag, options: state.Etiquetas[3].options, OptionStyles:["","",""], style:state.Etiquetas[3].style },
                            {tag: state.Etiquetas[4].tag, options: state.Etiquetas[4].options, OptionStyles:["",""], style:state.Etiquetas[4].style },
                        ],
                        Clicked: [action.tag, state.Clicked[1],state.Clicked[2],state.Clicked[3]] 
                    }
                
                case 3:
                    return{
                        ...state,
                        Etiquetas: [
                            {tag: state.Etiquetas[0].tag, options: state.Etiquetas[0].options, OptionStyles:["","","","",""], style:state.Etiquetas[0].style },
                            {tag: state.Etiquetas[1].tag, options: state.Etiquetas[1].options, OptionStyles: [], style:state.Etiquetas[1].style },
                            {tag: state.Etiquetas[2].tag, options: state.Etiquetas[2].options, OptionStyles:["","","",""], style:state.Etiquetas[2].style },
                            {tag: state.Etiquetas[3].tag, options: state.Etiquetas[3].options, OptionStyles:TestArray, style:state.Etiquetas[3].style },
                            {tag: state.Etiquetas[4].tag, options: state.Etiquetas[4].options, OptionStyles:["",""], style:state.Etiquetas[4].style },
                       ],
                       Clicked: [action.tag, state.Clicked[1],state.Clicked[2],state.Clicked[3]] 
                    }
                
                case 4:
                    return{
                        ...state,
                        Etiquetas: [
                            {tag: state.Etiquetas[0].tag, options: state.Etiquetas[0].options, OptionStyles:["","","","",""], style:state.Etiquetas[0].style },
                            {tag: state.Etiquetas[1].tag, options: state.Etiquetas[1].options, OptionStyles: [], style:state.Etiquetas[1].style },
                            {tag: state.Etiquetas[2].tag, options: state.Etiquetas[2].options, OptionStyles:["","","",""], style:state.Etiquetas[2].style },
                            {tag: state.Etiquetas[3].tag, options: state.Etiquetas[3].options, OptionStyles:["","",""], style:state.Etiquetas[3].style },
                            {tag: state.Etiquetas[4].tag, options: state.Etiquetas[4].options, OptionStyles:TestArray, style:state.Etiquetas[4].style },
                      ],
                      Clicked: [action.tag, state.Clicked[1],state.Clicked[2],state.Clicked[3]] 
                    }                  
                      
                default:
                    return state
                    
            }
            
        }
        return state

    }

    return state


}
