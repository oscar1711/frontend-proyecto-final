import React, {Fragment} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './paginas/auth/Login';
import Resgistro from './paginas/auth/Resgistro';
import Home from './Home';
import MostarClientes from './paginas/modulos/MostarClientes';
import AgregarClientes from './paginas/modulos/AgregarClientes';
import ModificarClientes from './paginas/modulos/ModificarClientes';
import MostrarProducto from './paginas/modulos/MostrarProducto';
import AgregarProductos from './paginas/modulos/AgregarProductos';
import ModificarProducto from './paginas/modulos/ModificarProducto2';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element = {<Login/>}></Route>  
            <Route path="/registro" exact element = {<Resgistro/>}></Route>
            <Route path="/home" exact element = {<Home/>}></Route>
            <Route path="/clientes" exact element = {<MostarClientes/>}></Route> 
            <Route path="/clientes/agregar" exact element = {<AgregarClientes/>}></Route>
            <Route path="/clientes/editar/:id" exact element = {<ModificarClientes/>}></Route>
            <Route path="/producto" exact element = {<MostrarProducto/>}></Route>   
            <Route path="/producto/agregar" exact element = {<AgregarProductos/>}></Route>   
            <Route path="/producto/editar/:id" exact element = {<ModificarProducto/>}></Route>      
          </Routes>
        </Router>
      </Fragment>
         
    </div>
  );
}

export default App;
