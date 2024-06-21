import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function RandomNumber() {
    const randomState:any = useSelector(state=>{
        return state
    })
    const dispatch = useDispatch();
    const ramdom=()=>{
        dispatch(
        {
            type: "RANDOM"
        }
    )
    }
  return (
    <div>Bài 5
        <div>[{randomState.RandomNumberReducer}]</div>
        <br />
        <button onClick={ramdom}>Generate Random Number</button>
    </div>
  )
}
