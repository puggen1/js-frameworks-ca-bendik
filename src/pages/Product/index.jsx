import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/Products';
import { SingleProductMain } from './style';
import SingleProduct from '../../components/Products/SingleProduct';
import Reviews from '../../components/Reviews';
import { useEffect } from 'react';
import { useState } from 'react';
const Product = () => {
  //gets id from url
  const {id} = useParams();
  //get all products
  const {data, isLoading, isError} = useContext(ProductContext);
  //starts as false so no errors show in return
  const [product, setProduct] = useState(false);
  //finds the product with correct id
  useEffect(()=>{
    const target = data.find((product)=>product.id === id)
    setProduct(target)
  },[data, id, product])
  return (
    <SingleProductMain>
      {/*temp loading and error displaying*/}
      {isLoading && <div> loading </div>}
      {isError && <div> error </div>}
      {product ? <> <SingleProduct description={product.description}  imageUrl={product.imageUrl} id={product.id} title={product.title} price={product.price} discountedPrice={product.discountedPrice} onDiscount={(product.discountedPrice < product.price)}/> <Reviews reviews={product.reviews} rating={product.rating}/> </>: null}
    </SingleProductMain>
  )
}

export default Product