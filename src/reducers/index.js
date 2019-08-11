import {combineReducers} from 'redux'
//import ProdukterReducer from './product'
import initReducer from './initReducer'
import cartReducer from './cart'


const allReducers = combineReducers ({
    //products: ProdukterReducer,
    init: initReducer,
    cart: cartReducer
})

export default allReducers