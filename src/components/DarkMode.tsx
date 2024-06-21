import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DarkMode() {
    const changeState:any = useSelector(state=>{
        return state;
    })
    const dispatch = useDispatch();
    const darkMode=()=>{
        dispatch({
            type: "MODE"
        })
    }
  return (
    <div>
        Bài tập 7
        <div style={{width:150,height:150,border:'1px solid black',backgroundColor:changeState.darkmodeReducer? "black" : "white"}}>
            <input onChange={darkMode} type="checkbox" />
            <label style={{color:changeState.darkmodeReducer? "white" : "black"}} htmlFor="">{changeState.darkmodeReducer? "tối" : "sáng"}</label>
        </div>
        bài 8 giống bài 7
    </div>
  )
}
