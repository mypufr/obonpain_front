import axios from "axios";
import { useEffect } from "react";

export default function OrderDetails() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("hhtp://localhost:3000");

        const result = await response.data;

        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Détails de la commande</h1>
    </>
  );
}
