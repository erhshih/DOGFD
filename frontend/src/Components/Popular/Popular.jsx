import {React, useState, useEffect} from 'react'
import './Popular.scss'
import Item from '../Item/Item'
const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(()=>{
    fetch('https://dogfd.onrender.com/populartoy')
    .then(res=>res.json())
    .then(data=>setPopularProducts(data))
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN Food</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
