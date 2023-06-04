import React,{useEffect, useState} from "react";
import DivAdd from "../../Components/DivAdd";
import { Link } from 'react-router-dom';
import {confirmation,sendRequest} from '../../functions';

const Bienvenida = () => {

  const [bienvenida, setBienvenida] = useState([]);
  const [classLoad, setClassLoad] = useState('');

  useEffect( () => {
    getBienvenida();
  },[]);

  const getBienvenida = async() => {
    const res = await sendRequest('GET', '', '/rest/inicio', '');
    setBienvenida(res);
    setClassLoad('d-none');
  }

  return (
    <div className="container-fluid">
        <div className="gapsi-b-container">
          <div className="gapsi-b-container-header">
            <h1>e-Commerce Gapsi</h1>
            <div></div>
          </div>
          <div className="gapsi-b-container-body">
            <img src='/adrian-ortiz.jpg' width="86" height="86" className="d-inline-block align-top" alt="Adrian Ortiz Martinez"/>
            <p>{bienvenida.welcome}</p>
            <Link to='/proveedores' className="btn btn-default gapsi-b-btn">
              Continuar
            </Link>
          </div>
          <div className="gapsi-b-container-footer">
            <p>Versión {bienvenida.version}</p>
          </div>
        </div>
    </div>
  )
}

export default Bienvenida