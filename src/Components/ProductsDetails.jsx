import { Product } from "./Products";
import pro_1 from "../assets/pro-1.webp";
import pro_2 from "../assets/pro-2.webp";
import pro_3 from "../assets/pro-3.webp";
import pro_4 from "../assets/pro-4.webp";

const Productsdetail = () =>{
    return(
        <>
                      <Product
                            imageSrc= {`${pro_1}`}
                            title="Golden Easy Spot Chair."
                            price="210.00"
                        />
                        <Product
                            imageSrc={`${pro_2}`}
                            title="Golden Easy Spot Chair."
                            price="210.00"
                            oldPrice="230.00"
                        />
                        <Product
                            imageSrc={`${pro_3}`}
                            title="Golden Easy Spot Chair."
                            price="250.00"
                        />
                        <Product
                            imageSrc= {`${pro_4}`}
                            title="Golden Easy Spot Chair."
                            price="210.00"
                        />
                      
        </>
    );
};

export { Productsdetail };