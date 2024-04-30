import React from "react";
import PropTypes from "prop-types";

interface TopProductsProps {
  title: string;
  description: string;
  inventory: number;
  sales: number;
  price: number;
  today: number;
  image:string;

}

const TopProducts: React.FC<TopProductsProps> = ({ image,title, description, inventory, sales, price, today }) => {
  return (
    <div className="admin-page-main-left-bottom-top-ptoduct">
      <div className="top-product-title">
        <img src={image}  />
        <div>
          <h4>{title} <br /> <small>{description}</small></h4>
        </div>
      </div>
      <div className="top-product-description">
        <div>
          <h4>Inventory</h4>
          <h6>{inventory}</h6>
        </div>
        <div>
          <h4>Sales</h4>
          <h6>{sales}</h6>
        </div>
        <div>
          <h4>Price</h4>
          <h6>{price}</h6>
        </div>
        <div>
          <h4>Today</h4>
          <h6>{today}</h6>
        </div>
      </div>
    </div>
  );
}

TopProducts.propTypes = {
    image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inventory: PropTypes.number.isRequired,
  sales: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  today: PropTypes.number.isRequired,
};

export default TopProducts;
