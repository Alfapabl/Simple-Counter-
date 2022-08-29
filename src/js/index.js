//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
;

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let unit = 0;
let ten = 0;
let hundred =0;
let thousand = 0;
let tenThousand = 0;




setInterval(() =>{
    unit++;

    if(unit > 9){
        unit = 0;
        ten++;
    }

    if(ten > 9){
        ten = 0;
        hundred++;  

    }
    if(hundred > 9){
        thousand++;
        hundred = 0;

    }
    if(thousand > 9){
        thousand = 0;
        tenThousand++;

    }
    if(tenThousand > 9){
        tenThousand = 0;
    }

    ReactDOM.render( < SecondsCounter units = {unit} ten = {ten} hundred={hundred} thousand = {thousand} tenThousand={tenThousand}/>, document.querySelector("#app"));
    
}, 
1000
)


