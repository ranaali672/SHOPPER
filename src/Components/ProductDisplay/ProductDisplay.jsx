import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon  from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
export default function ProductDisplay(props) {
    const {product} =props ;
    const {addToCart}=useContext(ShopContext);



  return (
    <div className="container">
    <div className='productDisplay'>

        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
          
            </div>
            <div className="productDisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
           
        </div>
        <div className="productDisplay-right">

            <h1>{product.name}</h1>
            <div className="productDisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(120)</p>
            </div>
            <div className='productDisplay-right-prices'>
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>

             <div className="productdisplay-right-description">
                A lightweight,usually knitted ,pullover shirt,close-fitting and worn around neckline and short sleeves ,worn as an undershirt or outer grament
             </div>
             <div className="productdisplay-right-size">
                <h1>Select Size </h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div> 
                    <div>M</div> 
                    <div>L</div> 
                    <div>XL</div> 
                    <div>XXL</div> 
                    <div>XXXL</div> 
                </div>

             </div>
             <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className='productdisplay-right-category text-capitalize'> <span>Category : </span> Women ,T-shirt , crop top</p>
             <p className='productdisplay-right-category text-capitalize'> <span>Tags : </span> modern ,latest</p>

        </div>








    </div>
    </div>
  )
}
