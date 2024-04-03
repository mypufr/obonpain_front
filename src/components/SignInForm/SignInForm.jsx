import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    // données de test
    last_name: "",
    first_name: "",
    email: "",
    password: "",
    phone: "",
    adress: "",
    zip_code: "",
    city: "",
    role: "",
    status: false,
    agreement: false,
    passwordConfirm: "",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onBlurPhone = () => {
    const phoneRegex = /^(0|\+33|0033)[1-9]([-. ]?[0-9]{2}){4}$/;
    if (!phoneRegex.test(credentials.phone)) {
      alert("Veuillez saisir un numéro de téléphone français valide.");
    }
  };
  
  const onBlurEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(credentials.email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
    }
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
        name="first_name"
        type="text"
        placeholder="Prénom"
        onChange={onChange}
        value={credentials.first_name}
        required
      />
      <input
        id="lastname"
        name="last_name"
        type="text"
        placeholder="Nom"
        value={credentials.last_name}
        onChange={onChange}
        required
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={onChange}
        onBlur={onBlurEmail}
        value={credentials.email}
        required
      />
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Votre N° téléphone"
        onChange={onChange}
        onBlur={onBlurPhone}
        value={credentials.phone}
      />
      <input
        id="zip_code"
        name="zip_code"
        type="text"
        placeholder="Code postal"
        pattern="[0-9]{5}"
        onChange={onChange}
        value={credentials.zip_code}
        required
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
        placeholder="Mot de passe"
        onChange={onChange}
        value={credentials.password}
        minLength={8}
        required
      />{" "}
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="Confirmer votre mot de passe"
        onChange={onChange}
        value={credentials.passwordConfirm}
        minLength={8}
        required
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
