import React, { useState, useMemo } from 'react'
import Usuarios from '../resources/usuarios';


///Crear el contexto

const UserContext = React.createContext();

///Creas la logica y entregas el proveddor
export function UsuarioProvider(props){

    ////Tener la logica de todos los datos y metodos
    const [usuarios, setUsuarios] = useState(Usuarios);


    //metodos

    function agregarUsuario(data){
        const currentUsuarios = [...usuarios]

        currentUsuarios.push(data);

        setUsuarios(currentUsuarios);
    }

    function agregarObservacion(idusuario){

    }

    function elimarUsuario(idusuario){

    }

    const values = useMemo(() => {
        return ({
                usuarios,
                agregarUsuario
        })
    }, [usuarios])

    return <UserContext.Provider value={values} {...props}/>
}


///Hook COnector
export function UseUsuarios(){
    const contexto = React.useContext(UserContext);

    if(!contexto){
        throw new Error("No esta dentro de un proveedor");
    }

    return contexto;
}