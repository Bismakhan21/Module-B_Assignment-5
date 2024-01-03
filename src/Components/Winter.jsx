import banner_1 from "../assets/banner-1.webp";
import { ShopNow } from "./button";

const Winter = () =>{
    return(
        <>
        <div className="row" style={{margin:"30px",
                                    padding:"40px"}}>
        <div className="col">
            <img src={`${banner_1}`} alt="" />
        </div>
        <div className="col" style={{padding:"50px"}}>
            <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus.</p>
            <br />
            <h1 style={{fontSize:"58px", fontWeight:"600"}}>Winter Discount
            Up to 30%</h1>
            <br />
            <p style={{fontSize:"18px", paddingBottom:"50px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <ShopNow />

        </div>
        </div>
        </>
    );
};

export { Winter };