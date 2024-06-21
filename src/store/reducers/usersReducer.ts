import {User} from '../../interface'
const initialUsers:User[]=[
    {
        id:1,
        userName: "Nguyễn Văn A",
        gender: "Nam",
        dateBirth:"20/11/2023",
        address:"Thanh xuân, Hà Nội"
    },
    {
        id:2,
        userName: "Nguyễn Văn B",
        gender: "Nữ",
        dateBirth:"20/11/2023",
        address:"Cầu Giấy, Hà Nội"
    }
]
const uses=(state=initialUsers,action:any)=>{
    return [...state]
}
export default uses;