import React from "react";
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

interface Props {
    onClick: any;
    cartCount:any
}

function ToolBar(props: Props) {
    
    return (
        <div className="tool-bar">
            <div className="burger" onClick={props.onClick}>
            <text>Menu</text>   
            </div>
            <div className="title">Brave Coders</div>
            <text   style={{position:"absolute",right:25}}>Cart({props.cartCount}  ) </text>
           
            {/* <CommonInput type="email" placeholder="enter user name" onClick={(e) => {
          setName(e?.target?.value) */}






        </div>
    )

}

export default ToolBar