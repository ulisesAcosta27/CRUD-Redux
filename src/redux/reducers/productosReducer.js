import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITADO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR
} from "../types";

//Cada reducer tiene su propio State
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null
};

//los Reducers siempre son una funcion y dentro de ellos llevan un switch
export default function (state = initialState, action) {
  //aqui vamos a escribir los casos que van a pasar dentro de nuestra app
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS: 
    case AGREGAR_PRODUCTO:
      return  {
        ...state,
        loading: action.payload
      }
    case AGREGAR_PRODUCTO_EXITO:
      return  {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload]
      }
    case PRODUCTO_ELIMINADO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
      return  {
        ...state,
        loading: false,
        error: action.payload
      }
    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        productos: action.payload
      }
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        loading: false,
        productoeliminar: action.payload
      }
    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
        productoeliminar: null
      }
    case OBTENER_PRODUCTO_EDITADO:
      return {
        ...state,
        productoeditar: action.payload
      }
    default:
      return state;
  }
}
