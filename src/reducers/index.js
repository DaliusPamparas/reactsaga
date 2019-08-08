import {combineReducers} from 'redux'
import ProdukterReducer from './product'
import Producttocart from './producttocart'
import StartCart from './cartstart'

const allReducers = combineReducers ({
    products: ProdukterReducer,
    tocart: Producttocart,
    startcart: StartCart
})

export default allReducers