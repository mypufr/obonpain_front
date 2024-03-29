import {useDispatch} from "react-redux";
import { increaseAmount, decreaseAmount, addItem, removeItem } from "../../store/reducers/cartReducer.jsx";


const Product = ({id, name, weight, price, image, amount, mould, photo}) => {
const dispatch = useDispatch();
const imgSrc = photo ? `http://localhost:3000/img/${photo}`:""

  return (
  
     <div 
   
     className="border border-grey m-2 p-2 mt-4 d-flex flex-column justify-content-between product-card" 
     
     >

      <div className="d-flex flex-column justify-content-between">  
     {imgSrc && (
          <img
            // src={imgSrc}
            src="https://images.unsplash.com/photo-1618917732448-4708aa2382fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={`${name}-img`}
            className="object-cover m-1 align-self-center"
            style={{ width: "95%" }}
          />
        )}

      {!imgSrc && (
          <img src="https://images.unsplash.com/photo-1618917732448-4708aa2382fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={`${name}-img`}
            className="object-cover m-1 align-self-center"
            style={{ width: "95%" }}
          />
        )}

      <p className="text-primary-4 mt-3">{name}</p>
      <p>{weight}g</p>
      <p style={{width:"6rem"}} className={`align-self-center text-primary-3 ${mould === "Non moulé" ? "" : "text-white bg-primary-4"}`}>
       {mould === "Non moulé" ? "non moulé" : "moulé"}
      </p>
      <p>{price} €</p>

      </div>

      <div className="border border-primary-4 m-2 d-flex flex-column align-self-center">
            <div className="d-flex flex-row gap-4 align-items-center">
              <button className="bg-primary-1 text-primary-4" 
              onClick={()=>{
                if (amount>=1) {
                  dispatch(decreaseAmount({id}));}
              }}
              >-</button>
              <p>{amount}</p>
              <button className="bg-primary-1 text-primary-4" onClick={()=>{dispatch(increaseAmount({id}))}}
              >+</button>
            </div> 
      </div>
     </div>
  )
}

export default Product