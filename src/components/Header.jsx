import React from 'react'
import '../App.css'


const Header = ({count,handleShow}) => {
  return (
    <>
    <div className='flex shopping-card'>
   <div style={{cursor:"pointer"}} onClick={()=>handleShow(false)}> Shoping Cart App </div>
    <div style={{cursor:"pointer"}} onClick={()=>handleShow(true)}> Card
    <sup>{count}</sup>
    </div>
    </div>
    </>
  )
}

export default Header