import React from "react";

const Product_Card = (props) => {
  const set_data_handle = () => {
    props.click_handle(props);
  };
  return (
    <div onClick={set_data_handle} className="row">
      <div className="col">
        <img className="pro-img" src={props.image_url} alt="" />

        <div className="d-flex">
          <p className="ms-3">Title</p>
          <h5 className="ms-3">{props.title}</h5>
          <h3 className="ms-3">${props.price}</h3>
        </div>
      </div>
    </div>
  );
};

export {Product_Card };