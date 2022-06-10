import React from "react";
interface Props{
    onClick:any;
    value:any;
    style:any;
    button: any;
    className: any;

    
}


function CustomButton(props:Props){
return(

<input type={props.button}  value={props.value} onClick={props.onClick}    className={props.className}  style={props.style} />


)
}
export default CustomButton