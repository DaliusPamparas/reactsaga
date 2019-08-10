import {combineReducers} from 'redux'
//import ProdukterReducer from './product'
import initReducer from './initReducer'


const allReducers = combineReducers ({
    //products: ProdukterReducer,
    init: initReducer
})

export default allReducers