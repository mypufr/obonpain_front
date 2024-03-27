import { NavLink } from "react-router-dom";

export default function NavBarDashboard() {
  return (
    <div style={{ width: "100%" }}>
      <ul className="nav nav-tabs d-flex justify-content-around bg-primary-4">
        <li className="nav-item">
          <NavLink
            to="/dashboard-client"
            className="nav-link"
            activeclassname="active"
            aria-current="page"
            exact="true"
          >
            Tableau bord
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/panier" className="nav-link" activeclassname="active">
            Commander
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/historique-commandes" className="nav-link" activeclassname="active">
            Historique
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
