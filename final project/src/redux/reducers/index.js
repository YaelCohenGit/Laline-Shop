import { combineReducers } from "redux";
import { cartReducer} from "./CartReducer";
import {productsReducer} from "./ProductsReducer";


export const allReducers = combineReducers({
        cartReducer:cartReducer,
        productsReducer : productsReducer
    })
