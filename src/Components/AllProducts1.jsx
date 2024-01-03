import { Productsdetail } from "./ProductsDetails";
import { Pro_title } from "./Products_title";
import { Product } from "./Products";
import pro_5 from "../assets/pro-5.webp";
import pro_6 from "../assets/pro-6.webp";
import pro_7 from "../assets/pro-7.webp";
import pro_8 from "../assets/pro-8.webp";






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
