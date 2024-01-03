import bg_image from '../assets/banner-bg-1.webp';

const Main_Section = () => {
    return (
        <>
        <div className='main-section'>
            <div style={
                {backgroundImage: `url(${bg_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",  
                width: "90%",
                height: "500px",
                padding: "20px 50px",
                marginLeft: "50px",
                marginTop: "50px"}}>
            
            <h2>Premium Home
              Decoration</h2>  
            <a href="#">Learn More</a>
            </div>
        </div>
        </>
    );
};

export { Main_Section };