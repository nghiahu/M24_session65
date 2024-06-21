import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const countState:any = useSelector(state=>{
        return state;
    })
    const dispatch = useDispatch();
    const increase=()=>{
        dispatch(
        {
            type: "INCREASE"
        }
    )
    }
    const decrease=()=>{
        dispatch(
        {
            type: "DECREASE"
        }
    )
    }
  return (
    <div>Bài 4
        <p>giá trị biến count: {countState.countReducer}</p>
        <button onClick={increase}>Tăng</button>
        <button onClick={decrease}>Giảm</button>
    </div>
  )
}
