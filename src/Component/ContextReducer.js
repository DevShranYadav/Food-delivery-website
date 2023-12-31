import React, { createContext, useContext, useReducer } from 'react';

const CartState = createContext();
const CartDispatch = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, img: action.img, price: action.price, qty: action.qty, size: action.size }]
            
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
            
        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
            })
            
        case "DROP":
            let emtArr = []
            return emtArr
            
        default:
            console.log("Error in Reducer");
    }
}

export const Cart = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatch.Provider value={dispatch}>
            <CartState.Provider value={state}>
                {children}
            </CartState.Provider>
        </CartDispatch.Provider>
    )
}

export const useCart = ()=> useContext(CartState);
export const useDispatchCart =()=> useContext(CartDispatch);
