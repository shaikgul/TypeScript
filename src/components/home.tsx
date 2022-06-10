import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action, Action2 } from '../Redux/actions';
import Ptag from '../reusable/ptag';
import CustomButton from '../reusable/button';


function Home() {
  const getList = useSelector((state: any) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    value()
  }, [])
  const value = async () => {
    const result = await fetch('https://reqres.in/api/users?page=2')
    const response: any = await result.json()

    if (result && result.status == 200) {
      dispatch(Action(response?.data))
    }
    else {
      console.log("error occured")
    }
  }
  const removal = (data: any) => {
    dispatch(Action2(data))
  }
  const addToCartservice = (data: any) => {
    dispatch({ type: "CASE3", payload: data })
  }
  return (
    <div>
      <h1 style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Services</h1>
      <div className='Home'>
        {getList.service.map((value: any) => {
          return (
            <div>
              <Ptag style={{ color: "green" }} onClick={() => removal(value)} value={value?.email} />

              <img src={value?.avatar} />
              <div>
                <CustomButton
                  style={{ marginBottom: 30 }}
                  className={'AddButton'}
                  button={"button"}
                  value={"ADD TO CART"}
                  onClick={() => addToCartservice(value)}
                />
              </div>



            </div>
          )
        })}




      </div>
    </div>



  )
}



export default Home