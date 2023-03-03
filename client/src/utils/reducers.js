import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORIES,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  UPDATE_SELECTED_PRODUCT,
  UPDATE_TOTAL,
  UPDATE_CURRENT_QUANTITY,
  LOGGEDIN,
  LOGOUT,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: action.payload
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: action.payload
      };

    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };

    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };

    case UPDATE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: [action.selectedProduct],
      }  
    
    case UPDATE_CURRENT_QUANTITY:
      return {
        ...state,
        currentQuantity: action.currentQuantity,
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
      
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    
    case LOGGEDIN:
      return {
        ...state,
        loggedIn: true,
      };
    
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
