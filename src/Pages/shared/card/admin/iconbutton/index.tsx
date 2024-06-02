import React from "react";
import PropTypes from "prop-types";

interface IconButtonListProps {
  className: string;
  color: string;
  title: string;
  price: string;
}

const IconButtonList: React.FC<IconButtonListProps> = ({ className, color, title, price }) => {
  return (
    <div className="admin-page-main-left-bottom-icon">
      <i className={`${className}`} style={{ color: color }}></i>
      <h4>
        {title} <br />
        <small>{price}</small>
      </h4>
    </div>
  );
}

IconButtonList.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default IconButtonList;
