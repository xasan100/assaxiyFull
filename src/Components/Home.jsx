import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "./features/cartSlice";
import { productsApi, useGetAllProductsQuery } from "./features/ProductsApi";


const Home = () => {
   const history=useHistory()
   const  dispatch=useDispatch()
   const {data,error,isLoading} = useGetAllProductsQuery()

   const handleAddToCart =(cartItem)=> { 
      dispatch(addToCart(cartItem))
      history.push('/cart')
   }
   // console.log(data[0].price.split('').slice(1, -1).join(''),'resss');
   
    return ( 
   <div className="home-container">
   {isLoading ? <p>Loading...</p>:error ? <p> An error occured...</p>:
   <>
   <h2>New Arrivwals</h2>
   <div className="products">
   {data?.slice(0,-1).map((cartItem)=>{ 
    return (
   <div key={cartItem.id} className="product">
   <h3>{cartItem.item}</h3> 
   <img src={cartItem.image} alt={cartItem.name} />    
   <div className="details">
    <span>{cartItem.desc}</span>
    <span className="price">{cartItem.brand}</span>
    <span className="price">{cartItem.price.split('').slice(1,-1).join('')}</span>
   </div>
   <button onClick={()=>handleAddToCart(cartItem)}>Add TO Cart</button>
   </div>)
})}
   </div>
   </>}
   </div> );
}
//  
export default Home;