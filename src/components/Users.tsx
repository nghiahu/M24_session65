import React from 'react'
import { useSelector } from 'react-redux'

export default function Users() {
    const usersState:any = useSelector(state=>{
        return state;
    })
    console.log('1111',usersState)
  return (
    <div>Bài 2
        <table border={1} style={{width:"50%",textAlign:"center",borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Địa chỉ</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {usersState.usersReducer.map((item:any)=>{
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.userName}</td>
                        <td>{item.gender}</td>
                        <td>{item.dateBirth}</td>
                        <td>{item.address}</td>
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
