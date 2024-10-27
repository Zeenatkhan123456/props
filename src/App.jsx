import React from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  return (
    <div className='App'>
     <h1>Props Exercise</h1>
     <Button
     btnText ="Click Me"
     btnColor="#0070ff"
     btnSize ="100px"
     borderColor ="#034b99"
     textSize="20px"
     radius="0px"
     btnTextColor="#fff"
     />
     <Button
     btnText= "Submit"
     btnColor="#28a745"
     btnSize ="130px"
     borderColor ="#28a745"
     textSize="22px"
     radius="10px"
     btnTextColor="#fff"
     />
     <Button
     btnText="Cancel"
     btnColor="red"
     btnSize ="130px"
     borderColor ="#7e0b16"
     textSize="20px"
     radius="25px"
     btnTextColor="#fff"
      />
     <Button
     btnText="Reset"
     btnColor="#ffc107"
     btnSize ="100px"
     borderColor ="#ffc107"
     textSize="20px"
     radius="5px"
     btnTextColor="#fff"/>
    </div>
  )
}

export default App

