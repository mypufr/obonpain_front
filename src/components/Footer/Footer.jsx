import React from "react";
import { NavLink } from "react-router-dom";
import "./footer-style-mobile.scss";

export default function Footer() {
  return (
    <nav className="d-flex justify-content-evenly bg-primary-4 footer__navbar">
      <NavLink
        to="/contact"
        style={{ textDecoration: "none" }}
        className="me-3 bg.primary-2 primary-4 text-white footer__link"
      >
        Contact
      </NavLink>

      <NavLink
        to="/mentions-legales"
        style={{ textDecoration: "none" }}
        className="me-3 bg.primary-2 placeholder-glow primary-4 text-white footer__link"
      >
        Mentions Légales
      </NavLink>
    </nav>
  );
}
