import React from 'react'
import './BreadCrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export default function BreadCrums(props) {
    const {product} =props;
  return (
    <div className="container">
    <div  className='breadCrums'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}

    </div></div>
  )
}


