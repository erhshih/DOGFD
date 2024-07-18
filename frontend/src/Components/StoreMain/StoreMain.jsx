import React, { useState } from "react";
import "./StoreMain.scss";
import { Link } from 'react-router-dom'
import storeFoods_icon from '../Assets/storeFoods.png'
import storeToys_icon from '../Assets/storeToys.png'
import storeHealth_icon from '../Assets/storeHealth.png'
const StoreMain = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className="store_wrap">
      {/* <div className="store_top">

        <div className="text_right">
          <a href="./all_items.html">
            <li>Foods</li>
          </a>

          <a href="./all_items.html">
            <li>Toys</li>
          </a>

          <a href="./all_items.html">
            <li>Health</li>
          </a>
        </div>
      </div> */}
      <div className="item_top">
        <div className="item_1">
          <div className="text">
            All Products
          </div>
          <div className="box" >
            <Link style={{textDecoration: 'none'}} to='/allproducts'>
              <div className="content">
                <p>See More</p>
                <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </Link>
          </div>
        </div>

        <div className="item_2">
          <div className="text">
            Foods
          </div>

          <div className="photo">
            <img src={storeFoods_icon} alt="" />
          </div>
          <div className="box" onClick={()=>{setMenu("foods")}}>
            <Link style={{textDecoration: 'none'}} to='/foods'>
              <div className="content">
                <p>See More</p>
                <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="item_3">
          <div className="text">
            Toys
          </div>
          <div className="photo">
            <img src={storeToys_icon} alt="" />
          </div>
          <div className="box" onClick={()=>{setMenu("toys")}}>
            <Link style={{textDecoration: 'none'}} to='/toys'>
              <div className="content">
                <p>See More</p>
                <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="item_4">
          <div className="text">
            Health
          </div>
          <div className="photo">
            <img src={storeHealth_icon} alt="" />
          </div>
          <div className="box" onClick={()=>{setMenu("health")}}>
            <Link style={{textDecoration: 'none'}} to='/health'>
              <div className="content">
                <p>See More</p>
                <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreMain;
