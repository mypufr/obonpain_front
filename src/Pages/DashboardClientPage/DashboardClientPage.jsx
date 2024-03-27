import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import NavBarDashboard from "../../components/NavBarDashboard/NavBarDashboard.jsx";

export default function DashboardClientPage() {
  const [orders, setOrders] = useState([]);

  let userFirstName;
  let userId;
  let firstOrder = orders[0];
  let orderId = orders.id;

  // récupération du token
  const token = localStorage.getItem("token");
  console.log({ token });

  // décodage du token pour récupérer id & le prénom du client
  if (token) {
    const decodedToken = jwtDecode(token);
    userFirstName = decodedToken.dataUser.first_name;
    userId = decodedToken.dataUser.id;
    console.log(userFirstName);
    console.log(userId);
  }

  console.log(userFirstName);

  const fetchOrders = async () => {
    try {
      const OrdersRes = await axios.get(
        `http://localhost:3000/api/users/${userId}/orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = OrdersRes.data;
      console.log(response);

      // Filtrer les commandes en fonction de la date de livraison supérieure ou égale à aujourd'hui
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const filteredOrders = OrdersRes.data.filter((order) => {
        const orderDate = new Date(order.date);
        return orderDate >= today;
      });

      setOrders(filteredOrders);
      console.log(filteredOrders);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      const deleteReq = await axios.delete(
        `http://localhost:3000/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (deleteReq.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== orderId)
        );

        console.log(deleteReq.data, "Suppression réussie");
      } else {
        console.error("La suppression a échoué");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Appel de la fonction lors du rendu initial
  useEffect(() => {
    fetchOrders();
  }, []); // Videz le tableau de dépendances pour exécuter une seule fois au montage

  // Affiche les 5 commandes les plus récentes avec tri chronologique
  const recentOrders = orders
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  console.log(firstOrder);
  console.log(recentOrders);

  function formatDate(inputDateString) {
    const inputDate = new Date(inputDateString);

    const week = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    // Obtenir le jour de la semaine, le jour, le mois et l'année
    const weekDays = week[inputDate.getDay()];
    const day = ("0" + inputDate.getDate()).slice(-2);
    const month = ("0" + (inputDate.getMonth() + 1)).slice(-2);
    const year = inputDate.getFullYear();

    const formatDate = `${weekDays} ${day}/${month}/${year}`;

    return formatDate;
  }

  return (
    <>
      <NavBarDashboard />
      <section className="ms-6 mb-5 d-flex flex-column">
        <h3 className="m-3 text-primary-4">Bonjour, {userFirstName}</h3>

        <h1 className="fs-5 text-start mt-3">Ma prochaine livraison</h1>

        {firstOrder && (
          <div className="d-flex flex-row mb-3 mt-2">
            <div
              className="border border-primary-4 p-2 m-2"
              style={{ width: "20rem" }}
            >
              <p>Jour de livraison: {formatDate(firstOrder.date)}</p>
            </div>
            <div
              className="border border-primary-4 p-2 m-2"
              style={{ width: "20rem" }}
            >
              <p>Nombre de pains: {firstOrder.quantity}</p>
            </div>
            <div
              className="border border-primary-4 p-2 m-2"
              style={{ width: "20rem" }}
            >
              <p>Lieu de livraison: {firstOrder.delivery_place_name}</p>
            </div>
            <div className="d-flex flex-column ms-3">
              <button className="btn btn-primary-3 m-1 p-2">
                <Link to="/detail-commande" className="no-underline text-white">
                  Voir le détail
                </Link>
              </button>
              <button className="btn btn-primary-3 m-1 p-2">
                <Link to="/panier" className="no-underline text-white">
                  Modifier
                </Link>
              </button>

              <button className="m-1 p-2">
                <i className="bi bi-trash3-fill me-3"></i>Annuler
              </button>
            </div>
          </div>
        )}
      </section>

      <h1 className="fs-5">Mes prochaines commandes</h1>
      <section className="d-flex">
        <table className="table fs-6">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Jour de livraison</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    id={`order-${index}`}
                    name=""
                    value=""
                  />
                </td>
                <td>{formatDate(order.date)}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary-4 mb-5 fs-m"
                  >
                    <i className="bi bi-pencil-square me-1"></i>
                    <Link to="/panier" className="no-underline text-primary-4">
                      Modifier
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    type="button"
                    className="btn btn-primary-4 mb-5 fs-m"
                  >
                    <i className="bi bi-trash3-fill me-1"></i>Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex align-items-center">
          <button className="btn btn-primary-3 m-1 p-2">
            <Link to="/panier" className="no-underline text-white">
              Ajouter une commande
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
