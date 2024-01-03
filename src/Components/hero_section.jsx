
import { Slider } from './Slider';

const Hero = () => {
    return (
        <div className="slider-area">
            <div className="slider-active">
                <Slider
                    id="01"
                    bg_Image
                    imgSrc
                    discount="30% off"
                    title="Comfort Chair"
                    description="Collect from Daxone & get 30% Discount."
                />
            </div>
        </div>
    );
};

export { Hero };
