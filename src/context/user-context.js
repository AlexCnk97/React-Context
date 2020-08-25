import React, { useState, useMemo, useEffect } from 'react';
import usuarios from '../resources/usuarios';

const usuarioContext = React.createContext();

export function UsuarioProvider(props) {
    const [users, setUsers] = useState(usuarios);


    function agregarUsuario(data) {
        const currentUsers = [...users];
        currentUsers.push(data);
        setUsers(currentUsers);
    }

    const values = useMemo(() => {
        return (
            {
                users,
                agregarUsuario
            }
        )
    }, [users])

    return <usuarioContext.Provider value={values} {...props} />
}

export function useUsuario() {
    const context = React.useContext(usuarioContext);
    if (!context) {
        throw new Error("El hook debe estar dentro del Contexto User");
    }
    return context;
}



