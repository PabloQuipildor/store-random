import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ( { titulo } ) => {
  return (
    <>
      <ItemCount/>
      <h1>
        {titulo}
      </h1>
    </>
  )
}

export default ItemListContainer