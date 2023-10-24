import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar container navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Unitify+
        </a>
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
              <a className="nav-link active mx-5"  aria-current="page" href="#">
              <iconify-icon icon="ph:thermometer" width="30" height="30"></iconify-icon>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link mx-5" href="#"><iconify-icon icon="uit:ruler" width="30" height="30"></iconify-icon></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link mx-5" href="#"><iconify-icon icon="mdi:barometer" width="30" height="30"></iconify-icon></a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
