const initialMode:boolean = false

const modeState=(state=initialMode,action:any)=>{
    switch (action.type) {
        case "MODE":
        return !state;
        default:
            return state;
    }
}
export default modeState;