import { useState } from "react";
import { send } from "emailjs-com";
import "./style.scss";

export default function ContactPage() {
  const [messageData, setMessageData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    tel: "",
    message: "",
  });

  const onChange = (e) => {
    setMessageData({
      ...messageData,
      [e.target.name]: e.target.value,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(messageData);

    send(
      "SERVICE ID", //service ID EmailJS
      "TEMPLATE ID", // template ID EmailJS
      messageData,
      "User ID" // API public key EmailJS
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <div
        className="m-2 p-2 d-flex justify-content-center border border-grey p-5"
        style={{ width: "100vw" }}
      >
        <section className="me-5">
          <form className="border border-white bg-white rounded-2">
            <h1 className="m-2">Formulaire de contact :</h1>
            <div className="input-group input-group-sm mt-2 mb-3">
              <input
                id="last_name"
                name="last_name"
                type="text"
                className="form-control bg-light"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Votre Nom (obligatoire)"
                required
                onChange={onChange}
                value={messageData.last_name}
              />
            </div>

            <div className="input-group input-group-sm mb-3">
              <input
                id="first_name"
                name="first_name"
                type="text"
                className="form-control bg-light"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Votre Prénom (obligatoire)"
                required
                onChange={onChange}
                value={messageData.first_name}
              />
            </div>

            <div className="input-group input-group-sm mb-3">
              <input
                id="email"
                name="email"
                type="email"
                className="form-control bg-light"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Votre Email (obligatoire)"
                required
                onChange={onChange}
                value={messageData.email}
              />
            </div>

            <div className="input-group input-group-sm mb-3">
              <input
                id="tel"
                name="tel"
                type="tel"
                className="form-control bg-light"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Votre Téléphone (facultatif)"
                onChange={onChange}
                value={messageData.tel}
              />
            </div>

            <div className="input-group mb-3">
              <textarea
                id="message"
                name="message"
                type="textarea"
                className="bg-light message_area"
                aria-label="With textarea"
                placeholder="Votre message..."
                required
                onChange={onChange}
                value={messageData.message}
              />
            </div>
          </form>
        </section>

        <section className="mt-3">
          <div className="mt-4">
            <ul
              className="d-flex flex-column align-items-start"
              style={{ listStyleType: "none" }}
            >
              <li className="mb-2">
                <i className="bi bi-person-fill me-2"></i>Noémie Gadessaud
              </li>
              <li className="mb-2">
                <i className="bi bi-house-fill me-2"></i>La Grange de l’Ainan
                38850 Chirens
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                lagrangedelainan@mailo.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>07.82.23.85.31
              </li>
            </ul>
            <div>
              <button
                type="submit"
                className="btn btn-primary-4 mt-4"
                onClick={onSubmit}
              >
                Envoyer
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
