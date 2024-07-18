import React, { useContext } from 'react'
import './CSS/ShopCategory.scss'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
    const  {all_product} = useContext(ShopContext)
    const filteredProducts = props.category === 'all'
    ? all_product
    : all_product.filter(item => item.category === props.category);
    return (<>
        <div className='shop-category'>
            <div className="shopcategory-banner" style= {{background: props.background}}>
                <p>{props.text}</p>
                <img src={props.banner} alt="" />
            </div>
            <div className="shopcategory-indexSort">
                <div className="shopcategory-sort">
                    Sort by <img src={ dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.map((item, i)=>{
                if(props.category === 'all' || props.category === item.category){
                return (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                )
                }else{
                    return null
                }
            })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
        </>)
}

export default ShopCategory