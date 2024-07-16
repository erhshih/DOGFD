import React from "react";
import "./StoreButton.scss";
const StoreButton = () => {
  return (
    <div class="store_button">
      <a href="./all_items.html" class="a1">
        <div class="item_1">
          <div class="text01">

            LIMITED&nbsp; EDITION
          </div>
          <div class="text">限量商品</div>

        </div>
      </a>

      <a href="./all_items.html" class="a2">
        <div class="item_1">
          <div class="text01">

            LIMITED&nbsp; TIME
          </div>
          <div class="text">限時特價</div>

        </div>
      </a>
    </div>
  );
};

export default StoreButton;
