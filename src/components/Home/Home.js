import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="section-1">
        <div className="container">
          <div className="shoe-sec">
            <div className="shoe-pic">
              <img src="../../../images\image-product-1.jpg" alt="" />
              </div>
            <div className="shoe-angles">
              <img src="../../../images\image-product-1-thumbnail.jpg" alt="" />
              <img src="../../../images\image-product-2-thumbnail.jpg" alt="" />
              <img src="../../../images\image-product-3-thumbnail.jpg" alt="" />
              <img src="../../../images\image-product-4-thumbnail.jpg" alt="" />
            </div>
          </div>
          <div className="details-sec">
            <div className="information-sec">
              <span className="company">SNEAKER COMPANY </span>
              <h1 className="name">
                fall limited edition <br />
                sneakers
              </h1>
              <p>
                These low-profile sneakers are your perfect casual wear <br /> companion.
                Featuring a durable rubber outer sole, they’ll <br /> withstand
                everything the weather can offer.
              </p>
              <div className="price">
                <h1>$125.00</h1>
                <h3>50%</h3>
              </div>
              <span className="price-cut">$250.00</span>
            </div>
            <div className="addcart-sec">
              <div className="plusminus-sec">
                <button type="button">+</button>
                <p>4</p>
                <button type="button">-</button>
              </div>
              <div className="addcart-button">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
