import React,{useContext,useEffect,useState} from 'react'
import { ShopContext } from './../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const RelatedProducts = ({category,subCategory}) => {

const{products} = useContext(ShopContext);

const[related,setRelated]=useState([]);

useEffect(()=>{
        if(products.length > 0){
            let productsCopy=products.slice();

            productsCopy=productsCopy.filter((item)=>category === item.category);

            productsCopy = productsCopy.filter((item)=>subCategory === item.subCategory);
            
            setRelated(productsCopy.slice(0,5))
        }
    
},[products]);

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'Related'} text2={' Products'} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))}
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nostrum tempora, illo animi cum numquam dolore repellat ipsa quasi consectetur, explicabo excepturi, necessitatibus reiciendis saepe facere ratione illum doloremque quaerat amet iure? Saepe sunt rerum laboriosam, sapiente alias facere deleniti itaque atque iste. Distinctio dolor sequi unde quia, quasi inventore aspernatur consectetur harum ipsum quo sed nisi ullam provident in. Natus, nisi! Voluptatem, quis eveniet ullam facilis sint harum architecto accusantium corporis eius magni incidunt nisi hic eaque dolorum autem. Est quae natus accusamus sed obcaecati quo, molestias maiores provident, rerum et velit, numquam quidem distinctio voluptas? Quo, incidunt natus.</p>


    </div>
  )
}

export default RelatedProducts