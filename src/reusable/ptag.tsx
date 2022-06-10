import React from "react";
interface Props{
    onClick:any;
    value:any;
    style:any;
    
}


function Ptag(props:Props){
return(
<p  style={props.style} onClick={props.onClick}> {props.value}</p>



)
}
export default Ptag