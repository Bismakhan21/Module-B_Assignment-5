import React from "react";

const Pro_title = (props) => {

    const set_data_handle = () => {
      props.click_handle(props);
    };

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
                        }}>{props.label}</p>
        </div>
        <div onClick={set_data_handle} className="flex justify-center max-w-sm">    
          <div className="cursor-pointer hover:scale-y-110 rounded-xl">

          <div className="flex flex-col">
          {/* <h1 className="ms-3">Title</h1> */}
          <img className="w-52" src={props.image_url} alt="" />
          {/* <h1 className="ms-3">{props.label}</h1> */}
          <h5>{props.description}</h5>
          <h1 className="ms-3">${props.price}</h1>
        </div>
      </div>
    </div>

        </>
    );
};

export { Pro_title };


// export const Pro_title = (props) => {
//   const set_data_handle = () => {
//     props.click_handle(props);
//   };
//   return (
      
    //   <div onClick={set_data_handle} className="flex justify-center max-w-sm">    
    //   <div className="cursor-pointer hover:scale-y-110 rounded-xl">

    //     <div className="flex flex-col">
    //       {/* <h1 className="ms-3">Title</h1> */}
    //     <img className="w-52" src={props.image_url} alt="" />
    //       <h1 className="ms-3">{props.label}</h1>
    //       <h1 className="ms-3">${props.price}</h1>
    //     </div>
    //   </div>
    // </div>
  // );
// };

