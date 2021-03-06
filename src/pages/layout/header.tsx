import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand mr-3" to="/">
            <img
              src="/assets/img/logobk-ext.png"
              alt="Logo contendo a palavra GMDFlix"
              height={40}
            />
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
                <Link className="nav-link active" aria-current="page" to="/">
                  <FaHome size={30} title="Home Page" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies/top-rated">
                  Avaliados
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filmes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/movies">
                      Todos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/movies/top-rated">
                      Mais bem avaliados
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/movies/popular">
                      Mais Populares
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
