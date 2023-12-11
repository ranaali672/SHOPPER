import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropDownIcon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

export default function ShopCategory(props) {
  const {all_product} =useContext(ShopContext)
  return (
    <div className='shopCategory'>
    
        <img className="shopcategory-banners" src={props.banners} alt="" />
        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1 -12</span> out og 36 products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropDownIcon} alt="" />
          </div>
        </div>

        <div className='shopCategory-product'>
          {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <div className='item'>
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 

              </div> 

            }
            else{
              return null
            }
          })}
        </div>


        <div className="shopCategory-loadmore">
          Explore More


        </div>






      

    </div>
  )
}
