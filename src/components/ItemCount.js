import React, { useState } from 'react'

const ItemCount = ({stock,initial, onAdd}) => {
  const [numero, setNumero] = useState(0)
  
  const sumar = () => {
    if (numero < 5){
      setNumero(numero + 1)
    }
    
  }
  const restar = () => {
    if (numero > 0){
      setNumero(numero - 1)
    }
  }
  const resetear = () => {
    setNumero(0)
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card text-center card border-dark">
            <img src='https://via.placeholder.com/220'/>
            <div className="card-body">
              <h5 className="card-title">COMPRA RANDOM</h5>
              <p className="card-text">{numero}</p>
              <button onClick={restar}> - </button>
              <button onClick={resetear}> resetear </button>
              <button onClick={sumar}> + </button>
              <ul className="list-group list-group-flush">
                <li className="list-group-item btn btn-primary">REALIZAR COMPRA</li>
                <li className="list-group-item btn btn-success">AGREGAR AL CARRITO</li>
                <li className="list-group-item btn btn-danger">ATRAS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount