import { useSelector } from "react-redux";

export default function BreadDetailPage() {
  const selectedBreadRange = useSelector(
    (state) => state.bread.selectedBreadRange // Permet de récupérer ici les données provennant de la page gammes de pain
  );

  console.log(selectedBreadRange);

  return (
    <>


    <div>
      <h1>{selectedBreadRange.name}</h1>
      <p>{selectedBreadRange.description}</p>
      <p>{selectedBreadRange.ingredient}</p>
    </div>



    </>
  );
}
