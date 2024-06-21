const initialState:string = "Rikkei Academy"

const changeState=(state=initialState,action:any)=>{
    switch (action.type) {
        case "CHANGE":
            state = "RikkeiSoft"
            return state 
        default:
            return state
    }
}
export default changeState;