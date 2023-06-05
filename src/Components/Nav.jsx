import {Link, useNavigate} from 'react-router-dom';
import storage from '../Storage/storage';

const Nav = () => {
  const go = useNavigate();

  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-white bg-white gapsi-navbar'>
      <div className='container-fluid'>
        <Link to="/" className='navbar-brand'>
          <img src='/logo.png' width="auto" height="36" className="d-inline-block align-top" alt="e-Commerce Gapsi"/>
          <span className='gapsi-navbar-name'>e-Commerce Gapsi</span>
        </Link>
        <button className='navbar-toggler' type='button' data-bd-toggle="collapse"
        data-bs-target='#nav' aria-controls='navbarSupportedContent'>
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>

      <div className='collapse navbar-collapse' id='nav'>
        <ul className='navbar-nav mx-auto mb-2'>
          <li className='nav-item px-lg-5'>
            <button className='btn btn-default'>Adrian</button>
          </li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Nav