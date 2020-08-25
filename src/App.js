import React from 'react';
import DetalleUsuario from './components/detalleUsuario';
import { UsuarioProvider, UseUsuarios } from './context/usuario-context';
import ModalAddUser from './components/addUser';

///componente p[adre]
const App = () => {
  return (
    <UsuarioProvider>
      <App1></App1>
    </UsuarioProvider>
  )
}

///comnponete hijo

function App1() {

  const { usuarios } = UseUsuarios();
  console.log(usuarios)
  return (
    <div className="container">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="row">
        <div className="col-5">
          <ul class="list-group">
            {usuarios.map(x => {
              return (
                <li key={x.cod} class="list-group-item">{x.nombre}</li>
              )
            })}
          </ul>
        </div>
        <div className="col-7">
          <DetalleUsuario></DetalleUsuario>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ModalAddUser></ModalAddUser>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
