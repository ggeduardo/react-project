const valores = {
    uno: "1",
    dos: "2",
    tres: "3"
 }

const initialState = {
    Amount : 0,
    array : [12,15,18]
    
}

export const amountReducer = (state = initialState, action) => {
    switch (action.type) {
        case valores.uno:
            return {...state, Amount : 0}
            
        case valores.dos:
            return {...state, Amount : 1}
            
        case valores.tres:
            return {...state, Amount : 2}
            
        
        default:
            return state
            
    }
    
}