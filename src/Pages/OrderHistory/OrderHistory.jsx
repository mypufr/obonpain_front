import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


let userId;


export default function OrderHistory() {

    const [ordersData, setOrdersData] = useState([]);

    const token = localStorage.getItem("token"); 
    console.log(token);

    if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.dataUser.id;
    console.log(userId);
    }

    const config = {
        headers: {
        Authorization: `Bearer ${token}`
        }
    }

    const getOrders = async(userId)=>{
        try {
          const OrdersRes = await axios.get(`http://localhost:3000/api/users/${userId}/orders`, config);
          console.log(OrdersRes)
          setOrdersData(OrdersRes.data)
          console.log(ordersData)
        }catch(error) {
          console.error('Error fetching orders:', error);  
        }
        
      }

useEffect (()=> {


getOrders(userId);
},[])


return (
    <div>
    <h1>Historique</h1>

     {/* <p>{userId.name}</p> */}

{ordersData.map ((order, index)=> {
    <div key={index}>
     <ul>
        <li>Date: {order.date}</li>
        <li>Prénom: {order.delivery_place_name}</li>
        <li>Email: {order.mould_id}</li>
        <li>Adresse: {order.name}</li>
        <li>Code Postal: {order.price}</li>
        <li>Ville: {order.quantity}</li>
        <li>Numéro de téléphone: {order.weight}</li>
      </ul>
</div>

})


}

    </div>
    
    ); 

}