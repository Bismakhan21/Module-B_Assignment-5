import pro_1 from "../assets/pro-1.webp";
import pro_2 from "../assets/pro-2.webp";
import pro_3 from "../assets/pro-3.webp";
// import { Product } from './Products.jsx';
import { Productsdetail } from "./ProductsDetails.jsx";
import { Pro_title } from "./Products_title.jsx";

const Products_Main = () => {
    return (
        <div>
            <div className="product-section pb-135">
                <div className="container">
                    <Pro_title label="Best Sell"/>
                    <div style={{display:"flex",
                                justifyContent:"space-around",
                                flexWrap:"wrap" }}>
                    <Productsdetail label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>     
                    </div>
                </div>
            </div>
        </div>
    );
};

export  { Products_Main };
 