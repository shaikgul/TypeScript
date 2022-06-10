import React from "react";

interface Props {
    type: any;
    placeholder: any;
    onClick: any
}

function CommonInput(props:Props) {
    return (
        <input type={props.type} placeholder={props.placeholder} onChange={props.onClick} />

    )


}
export default CommonInput