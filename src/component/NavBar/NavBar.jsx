import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar container navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Unitify+
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-5"  aria-current="page" to="/">
              <iconify-icon icon="ph:thermometer" width="30" height="30"></iconify-icon>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link mx-5" to="/length"><iconify-icon icon="uit:ruler" width="30" height="30"></iconify-icon></Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link mx-5" to="/prssure"><iconify-icon icon="mdi:barometer" width="30" height="30"></iconify-icon></Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
