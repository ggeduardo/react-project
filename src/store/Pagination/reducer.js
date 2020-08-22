
const initialState = {
    pagination: [1, 2, 3,"...",6],
    index: 0
}

export const PAGReducer = (state = initialState, action) =>{
    var aux = 0
    if(action.type === "left"){
        aux = state.pagination[0] + 1
        return{
            ...state,
            index : aux ,
            pagination: [aux, aux+1, aux + 2, "...", aux + 5 ]
        }
        
    }else if(action.type === "right"){
        
        
        if(state.pagination[0]!==1){
            aux = state.pagination[0] - 1
            return{
                ...state,
                index: aux,
                pagination: [aux, aux+1, aux + 2, "...", aux + 5 ]
            }
        }
        
    }else if(action.type === "NUMBER"){
        aux = parseInt(action.number)
        return{
            ...state,
            index: aux,
            pagination: [aux, aux+1, aux+ 2, "...", aux + 5 ]
        }
        
    }
    return state
}