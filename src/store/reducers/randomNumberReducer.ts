const initialRandomNumber:number[] = []

const random=(state=initialRandomNumber,action:any)=>{
    switch (action.type) {
        case "RANDOM":
           const number = Math.floor(Math.random() * 100)
           return [...state,number,","]
        default:
            return [...state]
    }
}
export default random;