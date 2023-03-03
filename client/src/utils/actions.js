// FUNCTION: Updates the list of available products in the global state variable
// INPUT VARIABLES: None
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

// FUNCTION: Updates the selected product variable in the global state
// INPUT VARIABLES: selectedProduct(productId)
export const UPDATE_SELECTED_PRODUCT = "UPDATE_SELECTED_PRODUCT"

// FUNCTION: Adds a new product to the cart global state variable
// INPUT VARIABLES: product(product object)
export const ADD_TO_CART = "ADD_TO_CART";

// FUNCTION: populates the cart global state from indexDB if the cart is empty on the cart page
// INPUT VARIABLES: None
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";

// FUNCTION: TODO Removes an item from the cart global state
// INPUT VARIABLES: 
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// FUNCTION: empties the cart global state
// INPUT VARIABLES: 
export const CLEAR_CART = "CLEAR_CART";

// FUNCTION: Updates the quantity of an item in the cart
// INPUT VARIABLES: _id(of product to be updated), purchaseQuantity
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

// FUNCTION: updates the categories global state variable
// INPUT VARIABLES: None
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// FUNCTION: updates the current category global state variable
// INPUT VARIABLES: currentCategory(id)
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

// FUNCTION: Updates the total global state variable with the current cart total
// INPUT VARIABLES: total(float)
export const UPDATE_TOTAL = "UPDATE_TOTAL";

// FUNCTION: Updates the current quantity global state variable with the quantity of the currently selected product
// INPUT VARIABLES: currentQuantity(int)
export const UPDATE_CURRENT_QUANTITY = "UPDATE_CURRENT_QUANTITY";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const LOGGEDIN = "LOGGEDIN";
export const LOGOUT = "LOGOUT";
export const SET_ADMIN = "SET_ADMIN";
