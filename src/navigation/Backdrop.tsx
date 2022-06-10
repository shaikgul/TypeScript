interface Props{
sidebar: any,
onClick: any
}

function Backdrop(props:Props){
return(
<div  onClick={props.onClick} className={props.sidebar?"backdrop backdrop--close" : "backdrop"} >
</div>
)
}
export default Backdrop