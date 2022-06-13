import { combineReducers } from 'redux'
//aqui importaresmo todos los reducers que vallamos creando y los pondremos dentro de combineReducer
import productosReducer from './productosReducer'


export default combineReducers({
  productos: productosReducer
})

