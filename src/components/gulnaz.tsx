import { useDispatch, useSelector } from "react-redux"
import { Action2 } from "../Redux/actions"

function Gulnaz(){
    const getList = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const removalData = (data: any) => {
        dispatch({ type: "CASE4", payload: data })
      }
return(
<div>
<h1 style={{fontSize:40,fontWeight:'bold',textAlign:'center'}}>cart data {getList.cartService.length}</h1>
      {getList.cartService.map((value: any) => {
        return (
          <div className="Gulnaz">
            <p>{value?.email}</p>
            <img src={value?.avatar} />
            <div><input style={{marginBottom:10}}  className='AddButton' type="button" value="remove" onClick={() => removalData(value)} /></div>


          </div>
        )


      })}

</div>
)

}
export default Gulnaz
