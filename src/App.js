import React from 'react'
import items from './items'
import moreItems from './moreItems'
import ShoppingCart from './ShoppingCart'
import Alert from './Alert'
import Greeting from './Greeting'
import fakeLogo from './fakelogo.svg'
// import { add, multiply } from './helper'
// import cats, { meow } from './cats'
import './App.css'

function App() {
  return (
    <div>
      <Alert variant="success">
        <h1>Welcome Back!</h1>
        <Greeting />
      </Alert>
      <Alert variant="danger">
        <h1>OH NO!</h1>
      </Alert>
      <img alt="" src={fakeLogo} id="logo" />
      <ShoppingCart items={items} username="Carly" />
      <ShoppingCart items={moreItems} username="Rusty" />
    </div>
  )
}

export default App
