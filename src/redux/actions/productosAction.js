// funciones que modifican el state
import clienteAxios from "../../config/axios";
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

// Crear nuevos productos
export function crearNuevoProductoActions(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      // Insertar en API
      await clienteAxios.post('/productos', producto)
      // Si todo sale bien actualiza el state
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      // Si hay un error cambiar el state
      console.log(error)
      dispatch(agregarProductoError(true));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado
});

// Funcion que descarga los productos de la base de datos

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos())
    try {
      const { data } = await clienteAxios.get('/productos')
      dispatch(descargarProductosExitosa(data))
    } catch (error) {
      dispatch(descargarProductosError())
    }
  }
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
})

const descargarProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos

})

const descargarProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true
})

// Selecciona y elimina el producto 

export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id))
    try {
      const res = await clienteAxios.delete(`/productos/${id}`)
      dispatch(eliminarProductoExito())
      console.log(res)
    } catch (error) {
      dispatch(eliminarProductoError())
    }
  }
}

const obtenerProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id
})

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true
})

export function obtenerProductoEditar(producto) {
  return async (dispatch) => {
    dispatch(obtenerProductoEditadoAction(producto))
  } 
}


const obtenerProductoEditadoAction = (producto) => ({
  type: OBTENER_PRODUCTO_EDITADO,
  payload: producto 
})