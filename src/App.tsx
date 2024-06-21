import React from 'react'
import Count from './components/Count'
import Profile from './components/Profile'
import Users from './components/Users'
import ListProduct from './components/ListProduct'
import RandomNumber from './components/RandomNumber'
import ChangeState from './components/ChangeState'
import DarkMode from './components/DarkMode'
export default function App() {
  return (
    <div>App
      <Profile></Profile>
      <Users></Users>
      <ListProduct></ListProduct>
      <Count></Count>
      <RandomNumber></RandomNumber>
      <ChangeState></ChangeState>
      <DarkMode></DarkMode>
    </div>
  )
}
