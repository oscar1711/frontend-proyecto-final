import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ContentHeader from '../../componentes/ContentHeader'
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert';
const ModificarProducto = () => {

    const [dimesiones, setDimesiones] = useState('');
    const [peso, setPeso] = useState('');
    const [precio, setPrecio] = useState('');
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const Navigate = useNavigate();
    const { id } = useParams();

    const editarClientes = async (e) => {
        e.preventDefault();
        let response = await APIInvoke.invokePUT(`/api/producto/${id}`, {
            dimesiones: dimesiones,
            peso: peso,
            precio: precio,
            origen: origen,
            destino: destino
        })
        if (response.msg === "Error al modificar") {
            const msg = "El producto no fue modificado correctamente";
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
            const msg = "El producto fue modificado correctamente";
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


        Navigate('/producto')
    }
    useEffect(() => {
        getProductoID();
    }, []);

    const getProductoID = async () => {
        const resul = await APIInvoke.invokePUT(`/api/producto/${id}`)
        setDimesiones(resul.dimesiones);
        setPeso(resul.peso);
        setPrecio(resul.precio);
        setOrigen(resul.origen);
        setDestino(resul.destino);

    }

    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Modificar Producto"}
                    breadCrumb1={'Listado de producto'}
                    breadCrumb2={'producto'}
                    ruta1={"/producto/editar"}
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
                                        <label htmlFor="dimesiones">Dimensiones</label>
                                        <input type="text"
                                            className='form-control'
                                            id='dimesiones'
                                            name='dimesiones'
                                            placeholder='Ingrese las dimensiones del producto'
                                            value={dimesiones}
                                            onChange={(e) => setDimesiones(e.target.value)}
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
                                        <label htmlFor="peso">Peso</label>
                                        <input type="number"
                                            className='form-control'
                                            id='peso'
                                            name='peso'
                                            placeholder='Ingrese el peso del producto'
                                            value={peso}
                                            onChange={(e) => setPeso(e.target.value)}
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
                                        <label htmlFor="precio">Precio</label>
                                        <input type="number"
                                            className='form-control'
                                            id='precio'
                                            name='precio'
                                            placeholder='Ingrese el precio del producto'
                                            value={precio}
                                            onChange={(e) => setPrecio(e.target.value)}
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
                                        <label htmlFor="origen">Origen</label>
                                        <input type="text"
                                            className='form-control'
                                            id='origen'
                                            name='origen'
                                            placeholder='Ingrese el origen del producto'
                                            value={origen}
                                            onChange={(e) => setOrigen(e.target.value)}
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
                                        <label htmlFor="destino">Destino</label>
                                        <input type="text"
                                            className='form-control'
                                            id='destino'
                                            name='destino'
                                            placeholder='Ingrese el destino del producto'
                                            value={destino}
                                            onChange={(e) => setDestino(e.target.value)}
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

export default ModificarProducto