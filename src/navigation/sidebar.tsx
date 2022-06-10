import React from "react";
import { Link } from 'react-router-dom';
interface Props {
    sidebar: any;
    onClick: any
}

function Sidebar(props: Props) {
    return (

        <div className={props.sidebar ? "sidebar sidebar--open" : "sidebar"}>
            <li><Link to={'/'} style={{ color: '#fff', textDecoration: 'none' }} onClick={props.onClick} > Homes </Link></li>
            <li><Link to={'/contact'} style={{ color: '#fff', textDecoration: 'none' }}  onClick={props.onClick} >Contact</Link></li>
            <li><Link to={'/about'} style={{ color: '#fff', textDecoration: 'none' }}  onClick={props.onClick}>About</Link></li>
            <li><Link to={'/harshad'} style={{ color: '#fff', textDecoration: 'none' }}  onClick={props.onClick}>Harshad</Link></li>
        </div>
    )
}
export default Sidebar