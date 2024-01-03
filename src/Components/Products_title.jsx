

const Pro_title = (props) => {
    return (
        <>
        <div className="title" style={{textAlign:"center"}}>
            <h2 
            style={{
                     marginTop: "50px",
                     fontSize: "42px",
                    }}>{props.label}</h2>
            <p 
            style={{
                        width:"800px",
                        margin:"auto",
                        fontSize:"18px",
                        marginBottom:"50px",
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
        </>
    );
};

export { Pro_title };