import { Productsdetail } from "./ProductsDetails.jsx";
import { Pro_title } from "./Products_title..jsx";
import { Product } from "./Products.jsx";
import pro_5 from "../assets/pro-5.webp.jsx";
import pro_6 from "../assets/pro-6.webp.jsx";
import pro_7 from "../assets/pro-7.webp.jsx";
import pro_8 from "../assets/pro-8.webp.jsx";

const AllProducts1 = () => {
    return (
        <div>
            <div className="product-section pb-135">
                <div className="container">
                    <Pro_title label="All Products"/>
                    <div style={{display:"flex",
                                justifyContent:"space-around",
                                flexWrap:"wrap" }}>
                        <Productsdetail />
                        <Product
                            imageSrc={`${pro_5}`}
                            title="Golden Easy Spot Chair."
                            price="210.00"
                            oldPrice="230.00"
                        />
                        <Product
                            imageSrc={`${pro_6}`}
                            title="Golden Easy Spot Chair."
                            price="250.00"
                        />
                        <Product
                            imageSrc={`${pro_7}`}
                            title="Golden Easy Spot Chair."
                            price="250.00"
                        />
                        <Product
                            imageSrc={`${pro_8}`}
                            title="Golden Easy Spot Chair."
                            price="250.00"
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export  { AllProducts1 };
