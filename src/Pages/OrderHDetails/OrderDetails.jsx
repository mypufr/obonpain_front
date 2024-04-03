import axios from "axios";
import { useEffect } from "react";
import "./orderDetail-style.scss"


// function fetchBreadName(){
//   const products = useSelector(selectAllProducts);
 
//   const foundBreadName = products.find((product)=> product.id === testOrderInfo.bread.id);
//   console.log(foundBreadName);
// }

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

function refreshPage(){
  window.location.reload(false);
}


export default function testOrderDetails() {

  const testOrderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
 
  const testDeliveryDate = JSON.parse(sessionStorage.getItem("deliveryDate"));
  const testDeliveryPlace = JSON.parse(sessionStorage.getItem("deliveryPlace"));

  useEffect(()=> {
    console.log("Order detail ok!")
    console.log(testOrderInfo);  
  },[])

  return (
    <>
      <h1 className="mt-3">Détails de la commande</h1>

      <div >
        <h2 className="mt-4 fw-bold">Votre commande en attente</h2>
        <p className="text-primary-4">Nous vous confirmerons votre commande dans les plus brefs délais.</p>

        <div className="m-2 p-2">

        <p>Lieu de livraison: <span>{testDeliveryPlace}</span></p>
        <p>Date de livraison: <span>{formatDate(testDeliveryDate)}</span></p>
        <p>Montant total: {testOrderInfo[0].total} €</p>

      

      <ul className="d-flex flex-column align-items-center">
         {testOrderInfo.map((order, index) => (
       <li key={index} className="d-flex flex-row justify-content-space-around border border-primary-4 m-2 p-1 order__info"> 
       <div>
       <img src={`http://localhost:3000/img/${order.image}`}
      //  "https://images.unsplash.com/photo-1618917732448-4708aa2382fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

            alt={`${order.bread_name}-img`}
            className="order-item__image object-cover m-1 align-self-center"
          />
       </div>
       <div className="d-flex flex-column align-items-start justify-content-center"> 
            <p className="order__info-detail">Nom du pain: <span>{order.bread_name}</span></p>
            <p className="order__info-detail">
            <span className={`text-primary-3 ${order.mould === "Non moulé" ? "" : "text-white bg-primary-4 p-1"}`}>
              {order.mould === "Non moulé" ? "non moulé" : "moulé"}
            </span></p>


            <p className="order__info-detail">Poids: <span>{order.weight}</span> g</p>
            <p className="order__info-detail">Quantité: <span>{order.quantity}</span></p>
            <p className="order__info-detail">Prix: <span>{order.price}</span> €</p>
       </div>
           </li>
         ))}
       </ul>
       </div>
      </div>
    </>
  );
}





