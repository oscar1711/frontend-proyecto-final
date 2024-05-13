import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import APIInvoke from "../../configuracion/APIInvoke"
import swal from "sweetalert"
const Resgistro = () => {

 
    const [usuario, setUsuario] = useState({
        nombre:"",
        email: "",
        password: "",
        confirmar:""
    });

    const { nombre, email, password,confirmar } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const RegistroCuenta = async () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (password !== confirmar) {
            const msg = "la contraseña debe ser iguales"
            swal({
                title: 'error',
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
        } else if (password.length < 8) {
            const msg = "la contraseña debe tener al menos 8 caracteres"
            swal({
                title: 'error',
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
        } else if (!emailRegex.test(usuario.email)){
            const msg = "El email no es válido";
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
        }else {
            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST('/api/usuarios', data);
            const mensaje = response.msg;
            if (mensaje === 'El usuario no existe') {
                const msg = "El usuario ya existe"
                swal({
                    title: 'error',
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
                const msg = "El usuario fue creado correctamente"
                swal({
                    title: 'Informacion',
                    text: msg,
                    icon: 'success',
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
                setUsuario({
                    nombre: "",
                    email: "",
                    password: "",
                    confirmar: ""
                })
            }
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        RegistroCuenta();
    }



    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <Link to={"#"}><b>Crear </b>Cuenta</Link>

                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">
                            ingrese los datos del usuario
                        </p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    id="nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                    required />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Confirmar password"
                                    id="confirmar"
                                    name="confirmar"
                                    value={confirmar}
                                    onChange={onChange}
                                    required

                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className='social-auth-links textcenter mb-3'>
                                <button type="submit" className='btn btn-block btn-primary'>Crear Cuenta</button>
                                <Link to={"/"} className='btn btn-block btn-danger'>Regresar al Login</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resgistro