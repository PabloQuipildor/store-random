import React from 'react'

const Item = ({nombre, stock, precio, categoria}) => {
  return (
    <>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card text-center card border-dark">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{categoria}</p>
              <p className="card-text">${precio}</p>
              <button > - </button>
              <button > resetear </button>
              <button > + </button>
              <ul className="list-group list-group-flush">
                <li className="list-group-item btn btn-primary">Stock {stock}</li>
                <li className="list-group-item btn btn-success">producto {nombre}</li>
                <li className="list-group-item btn btn-danger">${precio}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

            // <img src='https://via.placeholder.com/220'/>
export default Item