import {combineReducers} from 'redux'
import ProdukterReducer from './product'
import Producttocart from './producttocart'

const allReducers = combineReducers ({
    products: ProdukterReducer,
    tocart: Producttocart
})

export default allReducers