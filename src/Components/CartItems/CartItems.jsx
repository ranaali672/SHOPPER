import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItems() {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} =useContext(ShopContext)
  return (
    <div className='cartItems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id] >0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className='cart-product-icon' alt="" />
                    <p>{e.name.split(" ").splice(0,2).join(" ")}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'> {cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img  className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null

        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here </p>
                <div className="cartitems-promocodebox">
                    <input type="text" placeholder='promo code' name="" id="" />
                    <button>Submit</button>
                </div>
            </div>
        </div>



    </div>
  )
}
