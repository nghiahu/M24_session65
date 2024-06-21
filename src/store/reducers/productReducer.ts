import {Product} from '../../interface'
const initialProduct:Product[]=[
    {
        id:1,
        productName:"Cam sành",
        price:"20.000",
        quantity: 10
    },
    {
        id:2,
        productName:"Bưởi ba roi",
        price:"50.000",
        quantity: 15
    }
]
const productState=(state=initialProduct,action:any)=>{
    return [...state]
}
export default productState;