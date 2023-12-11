import React from 'react'
import './NewsLetter.css'
export default function NewsLetter() {
  return (  <div className="container">
    <div className='newsLetter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and Stay Updated</p>
            <div>
                <input type="email" placeholder='Your Email Id '/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
