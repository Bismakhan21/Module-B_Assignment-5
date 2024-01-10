import React, { useState } from "react";
import { Product_Card } from "./Components/Product_Card";
import { Details_Component } from "./Components/Details_Component";

const product_arr = [
    {
      id: 1,
      title: "Chair",
      price: 120.00,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg",
      
    },
    {
      id: 2,
      title: "Chair",
      price: 220.00,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      image:
        "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg",
      
    },
    {
      id: 3,
      title: "Chair",
      price: 210.00,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      
      image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg",
      
    },
    {
      id: 4,
      title: "Chair",
      price: 215.00,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      
      image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg",
      
    },
  
    
  ];


const About =() =>{

    const [current_data, setCurrent_data] = useState(null);

    const show_details_handle = (data) => {
      setCurrent_data(data);
    };

    
  const go_back_handle = () => {
    setCurrent_data(null);
  };
  return (

    <>
    <h1>Best sell</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore atque, maxime doloremque quam ipsam mollitia.</p>
    <div className="container1">
      {current_data ? (
        <div>
          <Details_Component
            go_back_handle={go_back_handle}
            title={current_data.title}
            price={current_data.price}
            image_url={current_data.image_url}
            description={current_data.description}
          />
        </div>
      ) : (
        <div className="container2">
          {product_arr.map((current_object, index) => {
            return (
              <Product_Card
                key={index}
                description={current_object.description}
                click_handle={show_details_handle}
                title={current_object.title}
                price={current_object.price}
                image_url={current_object.image}
              />
            );
          })}
        </div>
      )}
    </div>
    </>
  );
};

export {About};




