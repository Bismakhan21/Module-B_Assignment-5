import bg_Image from '../assets/background.png';
import imgSrc from "../assets/hm1-single-1.webp";
import { ShopNow } from './button';

const Slider = ({ id, discount, title, description }) => {

    return (
        <div className="main mim-height-100vh" id={id} style={{ backgroundImage: `url(${bg_Image})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                        <div className="slide">
                            <img className="slide-details" src={imgSrc} alt="" />
                        </div>
        
                    </div>
                    <div className="col-lg-7 col-md-6 col-12 col-sm-6">
                        <div className="slide-1">
                            <h3 className="slide-details">{discount}</h3>
                            <h1 className="slide-details">{title}</h1>
                            <p className="slide-details">{description}</p>
                            <ShopNow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Slider };