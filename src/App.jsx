import React from "react";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./styles/style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* composant de react router permettant de rendre les routes du fichier router */}
      <Footer />
    </>
  );
}

export default App;
