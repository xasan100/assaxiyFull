

import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"
const initialState={
      cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity:0,
    CartTotalAmount:0,

}
const  cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
     );
   if (itemIndex>=0) {
    state.cartItems[itemIndex].cartQuantity +=1;
    toast.info(`increased ${state.cartItems[itemIndex].item} product quantity`,{ 
        position:"bottom-left" ,
    })
   }
   else {
    const tempProductItem={...action.payload,cartQuantity:1};
    state.cartItems.push(tempProductItem); 

    toast.success(` ${action.payload.item} add new to cart` ,{
        position:"bottom-left" ,
       })
    }
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
 },
 remoFromCart(state,action) {
   const nexTcartItms=  state.cartItems.filter((cartItem) =>cartItem.id!==action.payload.id)
   state.cartItems=nexTcartItms;
   localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
   toast.error(` ${action.payload.item} removed from cart` ,{
    position:"bottom-left" ,
   })
 },
 decreaseCart (state,action) {
 const item=state.cartItems.findIndex(
    cartItem =>cartItem.id===action.payload.id
 )
 if (state.cartItems[item].cartQuantity > 1) {
    state.cartItems[item].cartQuantity -=1
    toast.info(` Decreased ${action.payload.item} cart  quantitiy` ,{
        position:"bottom-left" ,
       })
 }else if ( state.cartItems[item].cartQuantity === 1) {

    const nexTcartItms=  state.cartItems.filter((cartItem) =>cartItem.id!==action.payload.id)
    state.cartItems=nexTcartItms;
    toast.error(` ${action.payload.item} removed from cart` ,{
        position:"bottom-left" ,
    })
}
localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
},
Clearcart(state,action){
    state.cartItems=[];
    toast.error(`Cart cleared` ,{
        position:"bottom-left" ,
    });
localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
},
getTotals(state,action) {
     let{total,quantity}=state.cartItems.reducer((cartTotal,cartItem)=>{
            const  {price,cartQuantity}=cartItem;
            const itemTotal=price*cartQuantity;
            cartTotal.total+=itemTotal
            cartTotal.quantity+=quantity
            return cartTotal
        },{
            total:0,
            quantity:0
        })
        state.cartTotalQuantity=quantity;
        state.cartTotalAmount=total;
    }
},
// dscnpm i

});

export const { addToCart, remoFromCart,decreaseCart,Clearcart,getTotals }=cartSlice.actions;
export default cartSlice.reducer;