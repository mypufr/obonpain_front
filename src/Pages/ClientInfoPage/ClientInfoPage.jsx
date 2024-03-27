import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useState } from "react";

export default function ClientInfoPage() {
  const token = localStorage.getItem("token");
  const [updatedUserData, setUpdatedUserData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    adress: "",
    zip_code: "",
    city: "",
    phone: "",
  });
  console.log("token");

  let dataUser;

  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken.dataUser);

    dataUser = decodedToken.dataUser;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser();
  };

  const updateUser = async () => {
    try {
      const res = await axios.put(
        "http://localhost:3000/api/user",

        updatedUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(updatedUserData);
      console.log("submit ok");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({
      ...updatedUserData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="m-2 p-2">Info personnelles</h1>
      <ul style={{listStyleType:"none"}}>
        <li className="m-1"><span className="fw-bold">Nom:</span> {dataUser.last_name}</li>
        <li className="m-1"><span className="fw-bold">Prénom:</span> {dataUser.first_name}</li>
        <li className="m-1"><span className="fw-bold">Email:</span> {dataUser.email}</li>
        <li className="m-1"><span className="fw-bold">Adresse:</span> {dataUser.adress}</li>
        <li className="m-1"><span className="fw-bold">Code Postal:</span> {dataUser.zip_code}</li>
        <li className="m-1"><span className="fw-bold">Ville:</span> {dataUser.city}</li>
        <li className="m-1"><span className="fw-bold">Numéro de téléphone:</span> {dataUser.phone}</li>
      </ul>

   <div className="border border-1 w-50 m-auto mb-3">
      <h2 className="text-primary-4 m-2 p-2">Modifier les informations</h2>
      <form onSubmit={handleSubmit}
      className="d-flex flex-column gap-4 w-50 mt-2 m-auto"
      >
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder="Prénom"
          value={updatedUserData.first_name}
          onChange={handleInputChange}
        />
        <input
          id="last_name"
          name="last_name"
          type="text"
          placeholder="Nom"
          value={updatedUserData.last_name}
          onChange={handleInputChange}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={updatedUserData.email}
          onChange={handleInputChange}
        />
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Numéro de téléphone"
          value={updatedUserData.phone}
          onChange={handleInputChange}
        />
        <input
          id="zip_code"
          name="zip_code"
          type="text"
          placeholder="Code postal"
          value={updatedUserData.zip_code}
          onChange={handleInputChange}
        />
        <input
          id="adress"
          name="adress"
          type="text"
          placeholder="Adresse"
          value={updatedUserData.adress}
          onChange={handleInputChange}
        />
        <input
          id="city"
          name="city"
          type="text"
          placeholder="Ville"
          value={updatedUserData.city}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-primary-3 text-white mb-3">Enregistrer les modifications</button>
      </form>
     </div>
    </div>
  );
}
