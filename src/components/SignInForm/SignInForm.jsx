import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    // données de test
    last_name: "test",
    first_name: "test",
    email: "test@gmail.com",
    password: "0606060606",
    phone: "0606060606",
    adress: "233 rue du bac",
    zip_code: "59193",
    city: "lille",
    role: "client",
    status: false,
    agreement: false,
    passwordConfirm: "0606060606",
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
      .post("http://localhost:3000/api/signup", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        console.log("submit ok");
        console.log(res);
        navigate("/dashboard-client"); // si requête ok redirection vers dashboard client
      })

      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        id="firstname"
        name="firstname"
        type="text"
        placeholder="prénom"
        onChange={onChange}
        value={credentials.first_name}
      />
      <input
        id="lastname"
        name="lastname"
        type="text"
        placeholder="Nom"
        value={credentials.last_name}
        onChange={onChange}
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={onChange}
        value={credentials.email}
      />
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Votre N° téléphone"
        onChange={onChange}
        value={credentials.phone}
      />
      <input
        id="zip_code"
        name="zip_code"
        type="text"
        placeholder="Code postal"
        onChange={onChange}
        value={credentials.zip_code}
      />
      <input
        id="adress"
        name="adress"
        type="text"
        placeholder="Adresse"
        onChange={onChange}
        value={credentials.adress}
      />
      <input
        id="city"
        name="city"
        type="text"
        placeholder="Ville"
        onChange={onChange}
        value={credentials.city}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChange}
        value={credentials.password}
      />{" "}
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="passwordConfirm"
        onChange={onChange}
        value={credentials.passwordConfirm}
      />
      <input
        id="agreement,"
        name="agreement,"
        type="checkbox"
        placeholder="Acceptez-vous de recevoir des communications"
        onChange={onChange}
        value={credentials.agreement}
      />
      <div>
        <button type="submit">Inscription</button>
      </div>
      <button>
        <Link to="/connexion">Déjà Client</Link>
      </button>
    </form>
  );
}
