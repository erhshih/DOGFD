import React, { useContext, useMemo, useState } from 'react'
import './CSS/ShopCategory.scss'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    const [isOpen, setIsOpen] = useState(false);
    const [sortOption, setSortOption] = useState(null);

    const filterOptions = [
        { label: '$ from low to high', value: 'priceAsc' },
        { label: '$ from high to low', value: 'priceDesc' },
    ];

    const sortedProducts = useMemo(() => {
        let products = props.category === 'all'
            ? all_product
            : all_product.filter(item => item.category === props.category);
        if (sortOption === 'priceAsc') {
            return [...products].sort((a, b) => a.new_price - b.new_price);
        } else if (sortOption === 'priceDesc') {
            return [...products].sort((a, b) => b.new_price - a.new_price);
        }
        return products;
    }, [all_product, props.category, sortOption]);

    return (<>
        <div className='shop-category'>
            <div className="shopcategory-banner" style={{ background: props.background }}>
                <p>{props.text}</p>
                <img src={props.banner} alt="" />
            </div>
            <div className="shopcategory-indexSort">
                <div className="shopcategory-sort"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    Sort by <FontAwesomeIcon icon={isOpen ? fas.faChevronDown : fas.faChevronUp} />
                </div>
                {isOpen && (<>
                    <div className="shopcategory-sort-menu"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        {filterOptions.map((option) => (
                            <>
                                <div className="">
                                    <div
                                        className='shopcategory-sort-menu-item'
                                        key={option.value}
                                        onClick={() => {
                                            setSortOption(option.value)
                                            setIsOpen(false)
                                        }}
                                    >
                                        {option.label}
                                        {sortOption === option.value ? (<FontAwesomeIcon className='check-icon' icon={fas.faCheck} />) : null}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </>)}
            </div>
            <div className="shopcategory-products">
                {sortedProducts.map((item, i) => {
                    // if (props.category === 'all' || props.category === item.category) {
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
                    // } else {
                    //     return null
                    // }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    </>)
}

export default ShopCategory