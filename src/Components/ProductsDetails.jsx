import { useState } from 'react';
import { Product } from "./Products";
import pro_1 from "../assets/pro-1.webp";
import pro_2 from "../assets/pro-2.webp";
import pro_3 from "../assets/pro-3.webp";
import pro_4 from "../assets/pro-4.webp";

const Productsdetail = () =>{

    const [selectedProduct, setSelectedProduct] = useState(0);

    const handleClick = (productImage) => { 
        setSelectedProduct(productImage);
    };

    const handleBack = () => {

        setSelectedProduct(0);
    };

    return(
        <>

{selectedProduct ? (
                <div>
                    <h2>Product Details</h2>
                    <img src={selectedProduct} alt="Product" />
                    <button onClick={handleBack}>Back to Products</button>
                </div>
            ) : (
                <div>
                    
                      <Product
                            imageSrc= {`${pro_1}`}
                            title="Golden Easy Spot Chair."
                            price="210.00"
                            onClick={() => handleClick(pro_1)}
                    />
                        
                        <Product
                            imageSrc={`${pro_2}`}
                            title="Golden Easy Spot Chair."
                            price="210.00"
                            oldPrice="230.00"
                            onClick={() => handleClick(pro_2)}
                        />
                        <Product
                            imageSrc={`${pro_3}`}
                            title="Golden Easy Spot Chair."
                            price="250.00"
                            onClick={() => handleClick(pro_3)}
                        />
                        <Product
                            imageSrc= {`${pro_4}`}
                            title="Golden Easy Spot Chair."
                            price="210.00"
                            onClick={() => handleClick(pro_4)}
                        />
                         </div>
            )};
                      
        </>
    );
};

export { Productsdetail };