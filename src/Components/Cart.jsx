import { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decreaseCart, remoFromCart,Clearcart, getTotals,  } from "./features/cartSlice";



const Cart = () => {
    const dispatch=useDispatch()
 

    

const cart=useSelector((state=>state.cart ))


const handelRemoteFromCart =(cartItem) =>{
dispatch(remoFromCart(cartItem))
}

const handelDecreaseCart=(cartItem)=>{
dispatch(decreaseCart(cartItem));
}
 
const  handelIncreaseCart =(cartItem) =>{
console.log(dispatch(addToCart(cartItem)));
}
const  handelClearCart =() =>{
    dispatch(Clearcart())
 }

   
    return ( 
        <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length===0 ? <div className="cart-empty">
        <p>Your cart is currently empty </p>
        <div className="statrt-shopping">
         <Link to={"/"}> <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
         </svg>
          Start Shopping </span> </Link>
        </div>
        </div>:
        <div>
    <div className="titles">
    <div className="prduct-title">Product </div>
    <h3 className="price"> Price</h3>
    <h3 className="quantity"> Quantity</h3>
    <h3>Total</h3>
    </div>
    <div className="cart-itmes">
        {cart.cartItems?.map((cartItem)=>{
            return (
                <div key={cartItem.id} className="cart-item">
                  <div className="cart-product">
                    <img src={cartItem?.image} alt={cartItem?.name} />
                    <div>
                        <h3>{cartItem.item}</h3>
                        <h3>{cartItem.desc}</h3>
                        <button onClick={()=> handelRemoteFromCart(cartItem)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg></button>
                    </div>
                  </div>
                    <div className="cart-product-price">{cartItem.price.split('').slice(1, -1).join('')}</div>
                  <div className="cart-product-quantity"> 
                 <button onClick={()=>handelDecreaseCart(cartItem)}>-</button> 
                 <div className="count"> {cartItem.cartQuantity}</div>
                 <button onClick={()=>handelIncreaseCart(cartItem)}>+</button>
                 </div>
                    <div className="cart-product-total-price">
                        ${cartItem.price.split('').slice(1, -1).join('') * cartItem.cartQuantity}
                    </div>
                </div>
            )
        })}
    </div>
    <div className="cart-sumary">
        <div className="clear-cart" onClick={()=>handelClearCart()}>Clear Cart</div>
        <div className="cart-checout">
            <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.CartTotalAmount}</span>
            </div>
            <p>Taxes and shipping caculated at checout</p>
            <button>Checkout</button>
            <div className="continue-shopping">
             <Link to={"/"}> <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
             Continue Shopping </span> </Link>
             </div>
             </div>
         </div>
        </div> }
        </div>
     );
}
    
export default Cart;

