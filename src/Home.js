import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from './componentes/ContentHeader.js';
import Footer from './componentes/Footer.js';
import Navbar from './componentes/Navbar.js'
import Sidebar from './componentes/Sidebar.js';

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dashboard"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-5 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>Clientes</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit" />
                        
                                    </div>
                                    <Link to={"/Clientes"} className="small-box-footer">Ver Clientes <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                            <div className="col-lg-5 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Productos</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit" />
                                    </div>
                                    <Link to={"/producto"} className="small-box-footer">Ver Productos <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;