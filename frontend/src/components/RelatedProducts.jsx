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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, nostrum iure ipsam porro maiores velit itaque? Rem doloremque cumque dignissimos reprehenderit incidunt repudiandae tempore, omnis eligendi in magni itaque distinctio deleniti. Molestiae fuga ratione atque dolor commodi eligendi unde hic recusandae quam culpa explicabo possimus, suscipit pariatur dicta ab aspernatur dolore doloribus reiciendis cupiditate alias beatae. Eveniet quidem recusandae repellendus maxime fuga adipisci sit! Voluptate illo consequuntur veniam possimus eligendi voluptatibus atque? Et sapiente ea sit illum fuga voluptates reprehenderit culpa, molestiae, officia ipsam aliquid facilis delectus ipsum qui natus id eveniet quos? Animi quos fuga eos illo voluptas expedita.</p>


    </div>
  )
}

export default RelatedProducts