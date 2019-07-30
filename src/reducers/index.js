import {combineReducers} from 'redux'
import ProdukterReducer from './product'

const allReducers = combineReducers ({
    products: ProdukterReducer
})

export default allReducers