import { NavLink, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header-style-mobile.scss";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    // Redirige l'utilisateur vers la page d'accueil après la déconnexion
    Navigate("/");
  };

  /* useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
    
  }, []); */

  return (
    <div style={{ width: "100%"}}>
    
       <div className="burger-menu__button">
            <i className="bi bi-list"
            ></i>
          </div>

      <nav className="main__navbar">
        <div className="w-100 d-flex justify-content-evenly align-items-center bg-primary-2 main__navbar-content">
          <NavLink
            to="/accueil"
            style={{ textDecoration: "none" }}
            className="links__item nav-link-active"
          >
            Accueil
          </NavLink>

          <NavLink
            to="/gammes-pains"
            style={{ textDecoration: "none" }}
            className="links__item nav-link-active"
          >
            Gammes des pains
          </NavLink>

          <NavLink to="/accueil">
            <img
              src="src/assets/logo.png"
              alt="logo.png"
              // style={{ width: "80%", height: "6rem" }}
              className="logo object-cover mt-1" 
            />
          </NavLink>

          <NavLink
            to="/contact"
            style={{ textDecoration: "none" }}
            className="links__item nav-link-active"
          >
            Contact
          </NavLink>

          <NavLink
            to="/dashboard-client"
            style={{ textDecoration: "none" }}
            className="links__item nav-link-active"
          >
            Mon compte
          </NavLink>

          <NavLink
            to={isAuthenticated ? "/accueil" : "/connexion"}
            style={{ textDecoration: "none" }}
            className="links__item nav-link-active"
          >
            {isAuthenticated ? (
              <button
              className="links__item text-primary-3 rounded p-2"
              onClick={handleLogout}>Déconnexion</button>
            ) : (
              "Connexion"
            )}
          </NavLink>
        </div>   
      </nav>

          <div>
            <ul className="burger-menu">
              <li className="burger-menu__item"><NavLink to="/accueil" className="burger-menu__item-link">Accueil</NavLink></li>
              <li className="burger-menu__item"><NavLink to="/gammes-pains" className="burger-menu__item-link">Gammes des pains</NavLink></li>
              <li className="burger-menu__item"><NavLink to="/contact" className="burger-menu__item-link">Contact</NavLink></li>
              <li className="burger-menu__item"><NavLink to="/connexion" className="burger-menu__item-link">Mon compte</NavLink></li>
              <li className="burger-menu__item"><NavLink to="/mentions-legales" className="burger-menu__item-link">Mentions légales</NavLink></li>
            </ul>
          </div>

      <div className="position-relative">
        <img
          className="object-cover w-100 navbar__image"
          style={{ height: "8rem" }}
          src="https://images.unsplash.com/photo-1581339399838-2a120c18bba3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="assortiment de pain"
        />
      </div>
    </div>
  );
}
