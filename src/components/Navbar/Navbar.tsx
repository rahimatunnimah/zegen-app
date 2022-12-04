
// css
import "./Navbar.css"

function Navbar() {
	return (
		<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="offcanvasExample"
            >
            <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
            </button>
            <small className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold">Zegen</small>
            
          </div>
        </nav>
		</div>
	)
}

export default Navbar;

