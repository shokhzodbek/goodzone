import {ADD_CART_ITEM,REMOVE_CART_ITEM} from '../actionsConstants'
import products from '../../products'
// import axios from 'axios'

export const addToCart=(id)=>async(dispatch,getState)=>{
      const data = products.find(x=>x._id ===id)

      // const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      dispatch({
            type: ADD_CART_ITEM,
            payload:{ product:data._id,
            name:data.name,
            image:data.image,
            price:data.price}
      })
      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => (dispatch,getState) => {
      dispatch({
          type: REMOVE_CART_ITEM,
          payload: id,
      })
      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }