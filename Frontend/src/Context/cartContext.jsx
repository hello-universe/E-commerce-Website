import { createContext, useReducer } from "react";

let initialState = {count: 0, cartItems: []};

let CartContext = createContext();

const reducer = (state, action)=>{
    let newCount;
    let updatedCartItems;
    let product = action.product;
    let type = action.type;
    switch(type){
        case 'ADD_TO_CART':
            newCount = state.count+1;

            const hasItem = state.cartItems.find((prod)=>{
                return prod.id === product.id;
            })
            if(hasItem){
                updatedCartItems = state.cartItems.map((prod)=>{
                    return hasItem.id===prod.id ? {...prod, quantity: prod.quantity + 1} : prod;
                })
            }
            else{
                updatedCartItems = [...state.cartItems, {...product, quantity: 1}];
            }
            return {count: newCount, cartItems: updatedCartItems};
        
        case 'REMOVE_FROM_CART':
            newCount = state.count-1;
            if(product.quantity === 1){
                updatedCartItems = state.cartItems.filter((prod)=>{
                    return prod.id !== product.id;
                })
            }
            else{
                updatedCartItems = state.cartItems.map((prod)=>{
                    return prod.id === product.id ? {...prod, quantity: prod.quantity-1} : prod;
                })
            }
            return {count: newCount, cartItems: updatedCartItems};

        case 'DELETE':
            newCount = state.count - product.quantity;
            updatedCartItems = state.cartItems.filter((prod)=>{
                return prod.id != product.id;
            })
            return {count: newCount, cartItems: updatedCartItems};
    }
}

const CartContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider};