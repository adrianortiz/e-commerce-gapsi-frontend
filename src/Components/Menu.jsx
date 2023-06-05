import {Link, useNavigate} from 'react-router-dom';

const Menu = () => {
    const go = useNavigate();

  return (
    <div className='gapsi-main-menu'>
        <Link to="/" className='gapsi-main-menu-item'>
            <i className="fa-solid fa-id-card-clip gapsi-icon"></i> Bienvenida</Link>
        <Link to="/proveedores" className='gapsi-main-menu-item'>
            <i className="fa-solid fa-building gapsi-icon"></i> Proveedores</Link>

        <a className='gapsi-main-menu-item gapsi-main-menu-item-s'><i className="fa-solid fa-gear gapsi-icon"></i>Ajustes</a>
    </div>
  )
}

export default Menu