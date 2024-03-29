import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Product from "../../components/Cart/Product.jsx";
import Order from "../../components/Cart/Order.jsx";
import { selectAllProducts,getProductsStatus, getProductsError, fetchProducts, getTotalPrice, getTotalQuantity, updateTotal } from "../../store/reducers/cartReducer.jsx";
import { selectAllPlaces, getPlacesStatus, getPlacesError, fetchDeliveryPlaces } from "../../store/reducers/deliveryReducer.jsx"
import { selectAllDates, getDatesStatus, getDatesError, fetchDeliveryDates } from "../../store/reducers/deliveryDatesReducer.jsx"
import { emptyCart } from "../../store/reducers/cartReducer.jsx";
import { jwtDecode } from "jwt-decode";
import NavBarDashboard from "../../components/NavBarDashboard/NavBarDashboard.jsx";

import "./cart-style.scss";


export default function CartPage() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const products = useSelector(selectAllProducts);
  const productsStatus = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);
  
  const amount = useSelector(getTotalQuantity);
  const total = useSelector(getTotalPrice);
  
  
  const places = useSelector(selectAllPlaces);
  const placesStatus = useSelector(getPlacesStatus);
  const placesError = useSelector(getPlacesError)
  
  const dates = useSelector(selectAllDates);
  const datesStatus = useSelector(getDatesStatus);
  const datesError = useSelector(getDatesError)
  

const checkToken = ()=> {
  const token = localStorage.getItem("token"); 
  if (token) {
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.dataUser.id;
    console.log(userId);
    dispatch(emptyCart());
    setDeliveryDate("");
    setDeliveryPlace("");


  } else {
   console.log("token is not found")
   alert("Veuillez vous connecter d'abord à votre compte pour pouvoir passer la commande.")
   navigate("/connexion");
  }
}

  const [deliveryPlace, setDeliveryPlace] = useState("");
  const [deliveryDates, setDeliveryDates] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [isLoading, setIsLoading]= useState(false);

  const changePlace = (e)=> {
    console.log(e.target.value);
    const selectedPlace = e.target.value;
    console.log(selectedPlace)

   if(!deliveryPlace){
     setDeliveryPlace(selectedPlace)
   } 
    const filteredDates = dates.find((item)=> item.name === selectedPlace); // {}
   console.log(filteredDates)// {id: 2, name: ,delivery_date:["","",""] }
    setDeliveryPlace(selectedPlace)
    setDeliveryDates(filteredDates.delivery_date); // ["","",""]
  }

  function refreshPage(){
    window.location.reload(false);
  }

// wip : Submit the order
  const handleOrderSubmit = (userId)=> {
   
    setIsLoading(true);
   
    const orderList = products
      .filter((item) => item.cart_quantity > 0 && item.cart_quantity !== null && item.cart_quantity !== '')
      .map((item) => ({
        bread_id:item.bread_type_id,
        quantity: item.cart_quantity,
        creator_id: userId,
        customer_id: userId,
        // delivery_place_id: item.delivery_place_id,
        // delivery_date_id: item.delivery_date_id,   
        price: item.price,
      }));  
  
      console.log(orderList, `Total:${total}€`);
      if (total== 0 && deliveryPlace && deliveryDate) {
        alert("Veuillez selectionner au moins 1 article dans le panier!");
        // refresh the page to empty the cart
        refreshPage();
      } else if (!deliveryPlace || !deliveryDate){
        alert("Veuillez sélectionner à la fois le lieu et la date de livraison.");
      }
        

      // const submitOrders = async(userId)=>{
      //   try {
      //     // navigate("/dashboard-client");
      //     const OrdersRes = await axios.post(`http://localhost:3000/api/users/${userId}/orders`,orderList ,{
      //     headers: {
      //       Authorization: `Bearer ${token}`
      //     }
      //   }
      //     )
      //   console.log(OrdersRes)
        
      //   }catch(error) {
      //     console.error('Error posting orders:', error);
      //   }
      // }
      // submitOrders(userId);

    setIsLoading(false);
  }


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

useEffect(()=> {

if (productsStatus !== 'suceeded' && placesStatus !== 'suceeded' && datesStatus !== 'suceeded') {
  dispatch(fetchProducts())
  dispatch(fetchDeliveryPlaces())
  dispatch(fetchDeliveryDates())
}
},[productsStatus, placesStatus, datesStatus, dispatch])


useEffect(()=>{
  checkToken();
}, []);


useEffect(()=>{
  dispatch(updateTotal());
},[products, dispatch]) 

let content;
let cart;

if (productsStatus === 'loading'){
    content = <p>Chargement en cours...</p>;
} else if (productsStatus === 'suceeded') {
  content = products.map((product =>  
    <Product key={product.id+(product.bread_type_name)} id={product.id} name={product.bread_type_name} photo={product.photo} weight={product.weight} price={(Number(product.price)).toFixed(2)} mould={product.mould_name} amount={product.cart_quantity}/>
    ))
  cart = products.map((product => 
    <Order key={product.id} name={product.bread_type_name} weight={product.weight} price={(Number(product.price)).toFixed(2)} amount={product.cart_quantity} />
    ))
} else if (productsStatus === 'failed') {
    content = <p>{error}</p>
}
    return (
      <>
    <div className="responsive-container">

      <NavBarDashboard />
        <h1 className="m-4">Nouvelle commande</h1>

    {/* Livraison  */}
    <div className="d-flex justify-content-evenly div-mobile">
      <section>
      <div className="border border-primary-2 border-2 m-4 p-4 div-mobile" style={{width:"40vw"}}>
        <h3 className="fw-bold m-2 mb-3">Lieux de livraison</h3>
        <form className="formSize"> 
         <select value={deliveryPlace} onChange={changePlace}>
          <option>--Lieux--</option>

          {places.map(place => (
           <option key={place.id} value={place.name}>{place.name}
           </option>
        ))}
         </select>
        </form>
      </div>  
      </section> 

      <section>
      <div className="border border-primary-2 border-2 m-4 p-4 div-mobile" style={{width:"40vw"}}>
        <h3 className="fw-bold m-2 mb-3">Dates de livraison</h3>
        <form> 
         <select defaultValue={deliveryDates.join(',')}
         style={{width:"300px"}}
         onChange={
          (e)=>setDeliveryDate(e.target.value)
          }
          className="select-mobile"
         >
  
        {deliveryDates.map(date => (  
           <option key={date.id+date} value={date}>{formatDate(date)}
           </option>
        ))}
         </select>
        
         </form> 
      </div>   
      </section> 
     </div>

      <section className="d-flex m-2 p-4 section-reverse">

    {/* List des produits */}
      <div className="product-list">
          <div className="d-flex flex-wrap no-wrap" style={{width:"50vw"}}>
          {content}
          </div>
      </div>

    {/* Panier */}
    <div className="mt-4 cart">
        <div className="d-flex flex-wrap" style={{width:"40vw"}}>
          <div className="container mb-3 mt-4" style={{width:"30vw"}}>
            <div className="d-flex flex-column align-items-center cart-item">
              <h4 className="fw-bold"> Votre Panier</h4>
                <p className="mt-2">Vous avez {amount} produit(s) dans votre panier</p>
            </div>
          
          {cart}

          <div className="d-flex justify-content-between mt-4 cart-item">
            <p className="mb-0 h4 fw-bold">Prix total</p>
            <p className="mb-0 h4 fw-bold">
            {total} 
            €  
            </p>
          </div>

            { deliveryPlace && (
            <div className="d-flex justify-content-between mt-4 cart-item">
              <p className="mb-0 h4 text-primary-4">Livraison :</p>
              <p className="mb-0">{deliveryPlace}</p>

              {deliveryDate &&(
              <p className="mb-0 text-primary-4">le {formatDate(deliveryDate)}</p>)
              }
            </div>
            )}

            <button type="submit" className="btn btn-dark btn-block mt-4 w-100 rounded-0 py-3 cart-item"
            onClick={handleOrderSubmit}
            disabled={isLoading}
            >Commander
            </button>
          
          </div>  
        </div>
      </div>
    
      </section>

      </div>
     </>
    )
}
