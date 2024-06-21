import React from 'react'
import { useSelector } from 'react-redux'

export default function ListProduct() {
    const productState:any = useSelector(state=>{
        return state
    })
  return (
    <div>Bài 3
        <table style={{width:"30%"}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng(kg)</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {productState.productState.map((item:any)=>{
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
