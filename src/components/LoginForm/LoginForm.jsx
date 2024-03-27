import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "Email",
    password: "mot de passe",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);

    axios
      .post("http://localhost:3000/api/login", {
        ...credentials,
      })
      .then((res) => {
        console.log(res);
        /* console.log("submit ok"); */

        // Ajouter du token dans localstorage
        localStorage.setItem("token", res.data.token);

        const token = localStorage.getItem("token"); // récupère le token
        if (token) {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken.dataUser.role);
          const role = decodedToken.dataUser.role;

          if (role === "admin") {
            // redirection vers le dashboard en fonction du role
            navigate("/dashboard-admin");
          } else {
            navigate("/dashboard-client");
          }
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={onSubmit} className="mt-1 opacity-75">
      <div className="border border-sucess p-6 d-block m-auto bg-primary-1">
        <h3 style={{ fontSize: "2.5rem" }}>Connexion</h3>
        <div className="d-flex flex-column mt-5">
          <div className="mb-3">
            <label htmlFor="email">
              <i className="bi bi-envelope-fill me-2"></i>
              <input
                className="ms-2 fs-6 border border-0 rounded-4"
                style={{ width: "25vw" }}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <div className="mb-2">
            <label htmlFor="password">
              <i className="bi bi-lock-fill me-2"></i>
              <input
                className="ms-2 fs-6 border border-0 rounded-4"
                style={{ width: "25vw" }}
                type="password"
                name="password"
                id="password"
                placeholder="mot de passe"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </label>
          </div>
        </div>

        <div className="login-input d-flex justify-content-evenly">
          <div>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label
              htmlFor="rememberMe"
              className="mt-3 ms-2 me-2"
              style={{ fontSize: "1rem" }}
            >
              Se souvenir de moi
            </label>
          </div>
          <div className="mt-3 ms-2 me-2">
            <a href="#" className="fs-6 no-underline primary-3">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <button type="submit" className="btn btn-primary-4 mt-6 shadow-sm">
            Connexion
          </button>
          <Link className="mt-6 shadow-sm text-primary-4 fw-bold fs-5" to="/Inscription">Créer un compte</Link>
        </div>
      </div>
    </form>
  );
}
