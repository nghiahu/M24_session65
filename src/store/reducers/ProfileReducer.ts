import {Profile} from '../../interface'
const initialProfile:Profile=
    {
        id:1,
        userName: "Nguyễn Văn Nam",
        gender: "Nam",
        dateBirth: "20/03/2023",
        address: "Thanh Xuân, Hà Nội"
    }
    const profile=(state=initialProfile,action:any)=>{
        return state
    }
    export default profile;