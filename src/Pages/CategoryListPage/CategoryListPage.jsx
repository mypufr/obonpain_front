import React, { useEffect, useState } from "react";
import { selectedBreadRange } from "../../store/actions/BreadRange";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function BreadCategoryPage() {
  const dispatch = useDispatch();
  const [breads, setBreads] = useState([]);

  useEffect(() => {
    const fetchBreadTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/product-categories"
        );
        const bread = response.data;
        console.log(bread);
        setBreads(bread);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBreadTypes();
  }, []);

  const handleClick = (bread) => {
    dispatch(selectedBreadRange(bread)); // transmet les données à la page breadDétail
    console.log(bread);
  };

  return (
    <>
    <h1 className="mt-3">Nos gammes des pains</h1>
      <div className="container  mt-2 d-flex justify-content-center">
        <div className="d-flex flex-wrap gap-1" >
          {breads.map((bread) => (
            <div className="" key={bread.id}>
              <div
                className="border-1 mb-4 m-2 p-2 card d-flex flex-column"
                style={{width: "14rem", height:"100%"}}
                onClick={() => handleClick(bread)}
              >
                <Link to={`/details-gammes/${bread.id}`}  style={{ textDecoration: 'none' }}>
                  <img
                    src={bread.photo}
                    className="card-img-top rounded-0 object-cover"
                    style={{width:"90%"}}
                    alt={`${bread.name}-img`}
                  />
                  <h4 className="m-2 text-start text-primary-4">{bread.name}</h4>
                  <div className="card-body p-0">
                    <div className="mb-auto p-2">
                      <p className="text-dark text-start">{bread.description}</p>
                      <p className="text-muted mt-1">{bread.quantity}</p>
                      <p className="text-muted mt-1">{bread.price}</p>
                    </div>
                  </div>    
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
