import React from 'react'
import './NewsLetter.scss'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our new letter and stay updated</p>
      <div>
        <input type="email" placeholder='your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
