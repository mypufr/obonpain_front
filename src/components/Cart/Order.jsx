// import {useDispatch} from "react-redux";
// import {removeItem } from "../../store/reducers/CartReducer.jsx";

const Order = ({id, name, weight, price, amount}) => {
  // const dispatch = useDispatch();
  return (

    amount > 0 && (
    <div className="border border-primary-1 m-3 p-3 cart-item">

     <div className="d-flex justify-content-between">
      <p className="mb-0 fw-bold text-primary-4">{name} <span>{weight} g</span></p>
      <p className="">{price} €</p>
     </div>

     <div className="d-flex flex-column align-items-end">
      <p className="mb-0 fw-bold text-primary-3">Quantité: {amount}</p>
      <p className="display-none">{Number(price * amount).toFixed(2)}€</p>
    
     </div>
    </div>
    )
  )
}

export default Order