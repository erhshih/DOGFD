import React from "react";
import "./DescriptionBox.scss";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          This product is of excellent quality, highly scalable, and reliable.
          The features are user-friendly and the performance is outstanding. The
          excellent customer support ensures a great user experience and
          long-term satisfaction.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
