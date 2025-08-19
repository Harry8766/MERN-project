import React, { useContext,useEffect,useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './../components/Title';


const cart = () => {
  const{products,currency,cartItems} =useContext(ShopContext);

  const [cartData, setCartData] = useState([]);


  useEffect(()=>{

    const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if (cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quatity:cartItems[items][item]
          })
        }
      }

    }
    setCartData(tempData);
  },[cartItems])

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
      <Title text1={'YOUR'} text2={' CART'} />
      </div>
    </div>
  )
}

export default cart