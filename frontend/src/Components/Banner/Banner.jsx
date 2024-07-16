import React from 'react'
import './Banner.scss'
import arrow_icon from '../Assets/arrow.png'
import banner_dog from '../Assets/banner_dog.png'
const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-left">
            <h2>NEEW ARRIVALS ONLY</h2>
            <div>
                <p>Choose</p>
                <p>the Best Products</p>
                <p>for Your Dog</p>
            </div>           
            <div className="banner-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="banner-right">
            <img src={banner_dog} alt="" />
        </div>
    </div>
  )
}

export default Banner
