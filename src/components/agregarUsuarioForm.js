import React, { useState } from 'react'
import { useUsuario } from '../context/user-context'

const AgregarUsuarioForm = () => {

    const {agregarUsuario} = useUsuario();

    const [cod, setCod] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(18)
    const [correo, setCorreo] =  useState("")
    const [facultad,setFacultad] = useState("")
    const [carrera, setCarrera] = useState("")
    const [codCa, setCodCa] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            cod: cod,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            correo: correo,
            carrera: {
                facultad: facultad,
                carrera: carrera,
                cod: codCa
            }
        }
        
        agregarUsuario(data);
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <br />
            <header>INFORMACION DEL ESTUDIANTE</header>
            <hr></hr>
            <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Codigo</label>
                <div className="col-sm-12">
                    <input onChange={(e)=>{setCod(e.target.value)}} type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <input onChange={(e)=>{setNombre(e.target.value)}} placeholder="NOMBRES" type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                    <input  onChange={(e)=>{setApellido(e.target.value)}} placeholder="APELLIDOS" type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <input  onChange={(e)=>{setEdad(parseInt(e.target.value))}} type="number" max={50} placeholder="EDAD" className="form-control" />
                </div>
                <div className="col-sm-6">
                    <input  onChange={(e)=>{setEdad((e.target.value))}} type="email" placeholder="CORREO" className="form-control" />
                </div>
            </div>
            <header>INFORMACION DE LA CARRERA</header>
            <hr></hr>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Facultad</label>
                <select onChange={(e)=>setFacultad(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                    <option value="EDUCACION">EDUCACION</option>
                    <option value="INGENIERIA" >INGENIERIA</option>
                    <option value="LICENCIATURA">LICENCIATURA</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">CARRERA</label>
                <select onChange={(e)=>setCarrera(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                    <option value="EDUCACION BASICA">EDUCACION BASICA</option>
                    <option  value="INGENIERIA EN SISTEMAS">INGENIERIA EN SISTEMAS</option>
                    <option value="LICENCIATURA EN ADMINISTRACION DE EMPRESAS">LICENCIATURA EN ADMINISTRACION DE EMPRESAS</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">CODIGO CARRERA</label>
                <select onChange={(e)=>setCodCa(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                    <option value="i02">i02</option>
                    <option value="i04">i04</option>
                    <option value="i05">i05</option>
                </select>
            </div>
            <input type="submit" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" value="AGREGAR ESTUDIANTE" />
        </form>
    )
}

export default AgregarUsuarioForm;