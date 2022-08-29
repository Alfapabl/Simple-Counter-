import React from "react";


const SecondsCounter = (props) =>{

    return (
        <>
          <div className="app d-flex justify-content-center">
            
            <div className="border border-2"><p className="far fa-clock"></p></div>
            <span className="border border-2">{props.tenThousand}</span> 
            <span className="border border-2">{props.thousand}</span> 
            <span className="border border-2">{props.hundred}</span> 
            <span className="border border-2">{props.ten}</span>
            <span className="border border-2">{props.units}</span>
    
            
          </div>
         
              
             
        </>
        
        );
    };
    
    export default SecondsCounter;



 


    