import {ADD_CART_ITEM,REMOVE_CART_ITEM} from '../actionsConstants'

export const cartReducer = (state={cartItems:[]}, action) =>{
 const {type,payload} = action
switch(type) {
      case ADD_CART_ITEM:
            const item = payload
            const existItem = state.cartItems.find(x=>x.product === item.product)

            if(existItem){
                  return {
                        ...state,
                        cartItems: state.cartItems.map(x=>x.product===existItem.product?item:x)
                  }
            }
            else {
                  return {
                        ...state,
                        cartItems: [...state.cartItems,item]
                  }
            }
            case REMOVE_CART_ITEM:
                  return {
                      ...state,
                      cartItems: state.cartItems.filter(x => x.product !== payload)
                  }

            default:
                  return state



}
}
