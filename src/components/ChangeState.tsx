import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import changeState from '../store/reducers/changeStateReducer'

export default function ChangeState() {
  const ChangeState:any = useSelector(state=>{
    return state
  })
  const dispatch = useDispatch();
  const clickChang=()=>{
    dispatch({
      type: "CHANGE"
    })
  }
  return (
    <div>
        Bài 6
        <div>{ChangeState.changeStateReducer}</div>
        <br />
        <button onClick={clickChang}>Change state</button>
    </div>
  )
}
