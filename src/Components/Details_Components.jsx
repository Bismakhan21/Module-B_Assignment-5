import React from "react";

export const Details_Component = (props) => {
  return (
    <div className="product-details">
      <img className="max-w-sm" src={props.image_url} />
      <h1>Title: {props.title}</h1>
      <h3>$: {props.price}</h3>

      <p>{props.description}</p>
      <div className="btn-ShopNow">
        <a href="#" onClick={props.go_back_handle}>Go back</a>
         </div>
      
    </div>
  );
};