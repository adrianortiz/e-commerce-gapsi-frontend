import React,{useEffect, useState, useRef} from 'react';
import Menu from '../../Components/Menu';
import DivContainer from '../../Components/DivContainer';
import DivAdd from '../../Components/DivAdd';
import DivTable from '../../Components/DivTable';
import DivInput from '../../Components/DivInput';
import Modal from '../../Components/Modal';
import { confirmation, sendRequest } from '../../functions';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const Proveedores = () => {

  const [proveedores, setProveedores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [razon, setRazon] = useState('');
  const [direccion, setDireccion] = useState('');

  const [operation, setOperacion] = useState('');
  const [title, setTitle] = useState('');

  const [classLoad, setClassLoad] = useState('');
  const [classTable, setClassTable] = useState('d-none');
  const [rows, setRows] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  
  const NameInput = useRef();
  const close = useRef();

  let method = '';
  let url = '';

  // Cuando cargue la página llamará a las funciones
  useEffect(() => {
    // Parametro para indicar la página
    getProveedores(0);
  },[]);

  const getProveedores = async(page) => {
    const res = await sendRequest('GET', '', '/rest/proveedor/paginado?pagina=' + page + '&size=4', '');
    setProveedores(res.proveedores);
    setRows(20); // total registros
    setPageSize(res.size) // registros por pagina
    setClassTable('');
    setClassLoad('d-none');
  }

  const deleteProveedor = (idNombre, nombre) => {
    confirmation(nombre, '/rest/proveedor/' + idNombre, 'proveedores');
  }

  const clear = () => {
    setNombre('');
    setRazon('');
    setDireccion('');
  }

  const openModal = (op, n, r, d, proveedorId) => {
    clear();
    setTimeout( () => NameInput.current.focus(), 600);
    setOperacion(op);
    
    if (op == 1) {
      setTitle('Crear Proveedor');
    } else {
      setTitle('Actualizar Operador');
      setNombre(n);
      setRazon(r);
      setDireccion(d);
    }
  }

  const save = async(e) => {
    e.preventDefault();

    if (operation == 1) {
      method = 'POST';
      url = '/rest/proveedor';
    
    } else {
      method = 'PUT';
      url = '/rest/proveedor';
    }

    const form = {nombre:nombre,razon:razon,direccion:direccion};
    const res = await sendRequest(method, form, url, '');

    /*
    if (method == 'PUT' && res.razon != null) {
      close.current.click();
    }
    */

    if (res.razon != null) {
      close.current.click();
      clear();
      getProveedores(0);
      setTimeout( () => NameInput.current.focus(), 3000);
    }

  }

  const goPage = (p) => {
    setPage(p);
    getProveedores(p - 1);
  }

  return (
    <div className='main-container'>
      <Menu></Menu>
      <DivContainer>

        <div className='gapsi-menu-header'>
          <div className='gapsi-menu-title'>
            <p>Administración</p>
            <h1>Proveedores</h1>
          </div>
          <div className='gapsi-menu-buttons'>
            <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProveedores' onClick={()=>openModal(1)}>
                <li className='fa-solid fa-circle-plus'></li> Agregar elemento
            </button>
            <button className='btn btn-secondary'>
                <li className='fa-solid fa-print'></li> Imprimir elemento
            </button>
          </div>
          
        </div>
       
      <DivTable col='12' off='0' classLoad={classLoad} classTable={classTable}>
        <table className='table'>
          <thead>
            <tr>
              <th width="13" className='gapsi-column-center'>#</th>
              <th className='gapsi-column-center'>Nombre</th>
              <th className='gapsi-column-center'>Razón Social</th>
              <th className='gapsi-column-center'>Dirección</th>
              <th width="130" className='gapsi-column-center'>Acciones</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {proveedores.map( (row, i)=>(
              <tr key={row.nombre}>
                <td className='gapsi-column-center gapsi-column-bolder'>{(i+1)}</td>
                <td>{row.nombre}</td>
                <td>{row.razon}</td>
                <td>{row.direccion}</td>
                <td className='gapsi-column-center'>
                  <button className='btn btn-light' data-bs-toggle="modal" data-bs-target='#modalProveedores'
                  onClick={()=>openModal(2, row.nombre, row.razon, row.direccion, row.nombre)}
                  >
                    <i className='fa-solid fa-edit'></i>
                  </button>
                  <button className='btn btn-light' onClick={()=>deleteProveedor(row.nombre, row.nombre)}>
                    <i className='fa-solid fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationControl changePage={page => goPage(page)} next={true} limit={pageSize} page={page} total={rows} />
      </DivTable>
      
      <Modal title={title} modal='modalProveedores'>
        <div className='modal-body'>
          <form onSubmit={save}>
            <DivInput type='text' icon='fa-regular fa-building'
            value={nombre} className='form-control' placeholder='Nombre'
            required='required' ref={NameInput}
            handleChange={(e)=>setNombre(e.target.value)} />

            <DivInput type='text' icon='fa-solid fa-user-tie'
            value={razon} className='form-control' placeholder='Razón Social'
            required='required'
            handleChange={(e)=>setRazon(e.target.value)} />

            <DivInput type='text' icon='fa-solid fa-location-dot'
            value={direccion} className='form-control' placeholder='Dirección'
            required='required'
            handleChange={(e)=>setDireccion(e.target.value)} />

            <div className='d-grid col-12 mx-auto'>
              <button className='btn btn-primary'>Guardar</button>
            </div>
          </form>
        </div>
        <div className='modal-footer'>
          <div className='d-grid col-12 mx-auto'>
          <button className='btn btn-light' data-bs-dismiss='modal' ref={close}>Cerrar</button>
          </div>
        </div>
      </Modal>
      </DivContainer>
    </div>
  )
}

export default Proveedores