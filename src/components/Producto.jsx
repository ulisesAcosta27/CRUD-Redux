import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../redux/actions/productosAction'

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto
  const dispatch = useDispatch()

  const confirmarEliminarProducto = (id) => {
    dispatch(borrarProductoAction(id))
  }

  return (
    <tr>
      <td>{ nombre }</td>
      <td><span className='font-weight-bold'>$ { precio } </span></td>
      <td className='acciones'>
        <Link to={`/productos/editar/${id}`} className='btn btn-primary mr-2'>
          Editar
        </Link>
        <button 
          type='button'
          className='btn btn-danger'
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Producto