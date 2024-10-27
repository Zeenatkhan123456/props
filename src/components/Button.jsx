import React from 'react'

function Button(props) {
  return (
    <button 
    style={{
    backgroundColor:props.btnColor,
    color:props.btnTextColor,
    width:props.btnSize,
    padding:`2px solid ${props.borderColor}`,
    fontSize:props.textSize,
    fontWeight:"bold",
    margin:"20px",
    borderRadius: props.radius,
    cursor:"pointer",
    boxShadow: "5px 5px 5px #a1a1a1"
    }}>
        {props.btnText}
    </button>
  )
}

export default Button
