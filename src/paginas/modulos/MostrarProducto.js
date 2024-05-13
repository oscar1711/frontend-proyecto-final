import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../componentes/ContentHeader'
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import Sidebar from '../../componentes/Sidebar';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert'
const MostrarProducto = () => { 

    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    const getProductos = async () => {
        const response = await APIInvoke.invokeGET('/api/producto');
        setProductos(response.producto)
    }

    useEffect(() => {
        getProductos();
    }, [])

    const eliminarProducto = async (e, idproducto) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/producto/${idproducto}`);
        if (response.msg === 'El producto fue eliminado') {
            const msg = "El producto fue eliminado correctamente";
            getProductos();
            swal({
                title: 'Information',
                text: msg,
                icon: 'success',
                buttons: {
                    confim: {
                        text: "OK",
                        value: true,
                        visible: true,
                        className: "btn btn-primary",
                        closeModal: true
                    }
                }

            });
        } else {
            const msg = "El producto no fue eliminado correctamente";
            getProductos();
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
            navigate('/producto');
        }
        
    }

    return (
        <div className='wrapper'>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <ContentHeader
                    titulo={"Listado de Productos"}
                    breadCrumb1={'Inicio'}
                    breadCrumb2={'Producto'}
                    ruta1={"/home"}
                />
                <section className='content '>
                    <div className='card'>
                        <div className='card-header '>
                            <h3 className='card-title'>
                                <Link to={"/Producto/agregar"} className='btn btn-block btn-primary btn-sm'><i className="fa-solid fa-person-circle-plus"></i>Agregar</Link>
                            </h3>
                            <div className='card-tools'>
                                <button type='button' className='btn btn-tool' data-card-widget='collapse' tittle="Collapse">
                                    <i className='fas fa-items' />
                                </button>
                                <button type='button' className='btn btn-tool' data-card-widget='remove' tittle="Remove">
                                    <i className='fas fa-items' />
                                </button>
                            </div>
                        </div>
                        <div className='card-body '>
                            <table className='table table-bordered table-responsive'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '20%' }}>Dimesiones</th>
                                        <th style={{ width: '20%' }}>Peso</th>
                                        <th style={{ width: '20%' }}>Precio</th>
                                        <th style={{ width: '15%' }}>Origen</th>
                                        <th style={{ width: '15%' }}>Destino</th>
                                        <th style={{ width: '10%' }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map((producto, index) => (
                                        <tr key={index}>
                                            <td>{producto.dimesiones}</td>
                                            <td>{producto.peso}</td>
                                            <td>{producto.precio}</td>
                                            <td>{producto.origen}</td>
                                            <td>{producto.destino}</td>
                                            <td>
                                                <Link to={`/producto/editar/${producto._id}`} className='btn btn-sm btn-primary'><i className="fa-solid fa-file-pen"></i></Link>
                                                <button onClick={(e) => eliminarProducto(e, producto._id)} className='btn btn-sm btn-danger'><i className="fa-solid fa-user-xmark"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MostrarProducto