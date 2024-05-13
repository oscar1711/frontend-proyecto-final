import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

import ContentHeader from '../../componentes/ContentHeader'
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert'
const ModificarClientes = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const Navigate = useNavigate();
    const { id } = useParams();

    const editarClientes = async (e) =>{
        e.preventDefault();
        let response = await APIInvoke.invokePUT(`/api/clientes/${id}`,{
            nombres: nombres, 
            apellidos: apellidos, 
            cedula: cedula, 
            correo: correo, 
            telefono: telefono, 
            direccion: direccion,
        })
        if (response.msg === "Error al modificar") {
            const msg = "El cliente no fue modificado correctamente";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }

            });
        } else {
            const msg = "El cliente fue modificado correctamente";
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
        } 

        
        Navigate('/clientes')
    }
    useEffect(() => {
        getClientesID();
    },[]);

    const getClientesID = async() => {
        const resul = await APIInvoke.invokePUT(`/api/clientes/${id}`)
        setNombres(resul.nombres);
        setApellidos(resul.apellidos);
        setCedula(resul.cedula);
        setCorreo(resul.correo);
        setTelefono(resul.telefono)
        setDireccion(resul.direccion);


    }
    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Modificar cliente"}
                    breadCrumb1={'Listado de clientes'}
                    breadCrumb2={'Modificar'}
                    ruta1={"/clientes/editar"}
                />
                <section className='content'>
                    <div className='card'>
                        <div className='card-header'>
                            <div className='card-tools'>
                                <button type='button' className='btn btn-tool' data-card-widget='collapse'
                                    title='Collapse'>
                                    <i className='fas fa-times' />
                                </button>
                                <button type='button' className='btn btn-tool' data-card-widget='remove'
                                    title='Remove'>
                                    <i className='fas fa-items' />
                                </button>
                            </div>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={editarClientes}>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor="nombres">Nombres</label>
                                        <input type="text"
                                            className='form-control'
                                            id='nombres'
                                            name='nombres'
                                            placeholder='Ingrese los nombres del cliente'
                                            value={nombres}
                                            onChange={(e) => setNombres(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-envelope' />
                                    </div>
                                </div>


                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <input type="text"
                                            className='form-control'
                                            id='apellidos'
                                            name='apellidos'
                                            placeholder='Ingrese los Apellido del cliente'
                                            value={apellidos}
                                            onChange={(e) => setApellidos(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor="Cedula">Cedula</label>
                                        <input type="number"
                                            className='form-control'
                                            id='cedula'
                                            name='cedula'
                                            placeholder='Ingrese la cedula del cliente'
                                            value={cedula}
                                            onChange={(e) => setCedula(e.target.value)}
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor="correo">Correo</label>
                                        <input type="text"
                                            className='form-control'
                                            id='correo'
                                            name='correo'
                                            placeholder='Ingrese los nombres del cliente'
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor="telefono">telefono</label>
                                        <input type="telefono"
                                            className='form-control'
                                            id='telefono'
                                            name='telefono'
                                            placeholder='Ingrese el telefono del cliente'
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor="direccion">Direccion</label>
                                        <input type="text"
                                            className='form-control'
                                            id='direccion'
                                            name='direccion'
                                            placeholder='Ingrese los direccion del cliente'
                                            value={direccion}
                                            onChange={(e) => setDireccion(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-envelope' />
                                    </div>
                                </div>

                                <div className='card-footer'>
                                    <button type='submit' className='btn btn-primary'>
                                        Modificar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ModificarClientes