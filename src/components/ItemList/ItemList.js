import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'

const ItemList = () => {
  
  const [info, setInfo]= useState([])
  
  
  useEffect(() => {
    setTimeout(() => {
      fetch("data.json")
      .then((resp) => resp.json())
      .then((data) => setInfo(data))
    }, 2000);
  }, [])
  
  
  console.log(info)
  
  return (
    <section className='container'>
      <div className='row justify-content-md-center'>
        <p className='col col-lg-2'>ELEGI TU producto</p>

      </div>
      <div>
        {info.map(e =>
          <Item
          key={e.id}
          nombre={e.nombre}
          stock={e.stock}
          categoria={e.categoria}
          precio={e.precio}
          />
          )}
      </div>    
    </section>
  )
}

export default ItemList