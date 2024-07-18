import React from "react";
import "./StoreButton.scss";
const StoreButton = () => {
  return (
    <div className="store_button">
      <a href="" className="a1">
        <div className="item_1">
          <div className="text01">

            LIMITED&nbsp; EDITION
          </div>
          <div className="text">限量商品</div>

        </div>
      </a>

      <a href="" className="a2">
        <div className="item_1">
          <div className="text01">

            LIMITED&nbsp; TIME
          </div>
          <div className="text">限時特價</div>

        </div>
      </a>
    </div>
  );
};

export default StoreButton;
