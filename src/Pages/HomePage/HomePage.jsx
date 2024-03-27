import "./style-mobile.scss";


export default function PageAccueil() {
  return (
    <>
      <div className="main d-flex flex-column align-items-center">
        <div className="main__container m-2 p-2" 
        // style={{ width: "95%" }}
        >
          <h1 className="text-primary-4 m-3">
            Bienvenue à la grange de l’Ainan
          </h1>
       <div className="d-flex flex-column justify-content-evenly align-items-center">


       <div className="container__introduction">

        <div 
        className="float-item" >
          <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{width:"100%"}}
          className="object-cover m-1 align-self-center "
          />
         </div>

          <div 
          className="content p-2">
          <p className="text">
            Ma passion pour le pain bio paysan a débuté un jour de l’année 2010
            lorsque je pénétrais pour la première fois dans un fournil paysan.
            L’idée du projet de fournil bio pris lentement vie. En février 2023,
            c’est la première fabrication de pain artisanal et la première
            cuisson du pain au four à bois. Le fournil, installé sur Chirens,
            propose une gamme de pains biologiques.
          </p>
       
          <p className="text mt-3">
            Mon envie : Vous proposer du pain artisanal de bonne qualité
            gustative et nutritionnelle, au levain naturel, certifié bio.
            L’étape de la cuisson du pain dans un four à bois permet de
            retrouver le goût unique du pain paysan.
          </p>
          <p className="text mt-3">
            Je m’approvisionne en farines essentiellement auprès d’une paysanne
            dans le Trièves (38- Mens). Ses farines sont moulues à la meule de
            pierre sur moulin Astrier. Le complément de farine, je le prends
            auprès du Moulin Pichard (04- Malijai), moulin familial et
            entièrement bio.
          </p>
          <p className="text mt-3 fw-bold">
            Les pains sont produits dans mon atelier, puis sont disponibles en
            points de dépôt sur différents lieux.
          </p>
        
          <h2 className="text-primary-4 m-4">
            Du pain bio qui prends tout son temps pour donner le meilleur de
            lui-même
          </h2>
          <p className="text mt-3">
            Dans mon pétrin en bois, je mets de la farine, de l’eau, du sel, du
            levain et c’est tout!
          </p>

          <p className="text mt-3">
            Ensuite je pétrie à la main et surtout, je laisse le temps à la pâte
            de former toute seule son réseau de gluten qui permettra au pain
            d’avoir de belles alvéoles. La pâte est ensuite coupée et mise en
            forme dans un banneton ou un moule. Commence alors une phase de
            repos d’environ 15h au frais qui va permettre aux pâtons de pain de
            pousser et de s’enrichir d’arômes !
          </p>
          <p className="text mt-3">
            Les pains briochés et les viennoiseries quant à eux se font à l’aide
            d’un batteur.
          </p>
       

          <div className="link__products">
            <a href="/gammes-pains">
              <button
                type="button"
                className="btn btn-primary-4 mt-4 mb-4 color-transition"
              >
                Découvrir les pains
              </button>
            </a>
          </div>

          <div 
        className="invisible__image" >
          <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{width:"80%"}}
          className="object-cover m-1 align-self-center "
          />
         </div>

          <h2 className="text-primary-4 m-2 p-2">
            Etre autonome sur ses commandes en ligne
          </h2>
          <p className="text mt-3">
            Un espace personnel vous permet d’organiser vous-même le contenu de
            votre commande, ainsi que son rythme. Dans cette interface
            choisissez les pains souhaités, au lieu de dépôt de votre choix
            parmi ceux proposés.
          </p>


          <div className="signUp">
            <a href="/inscription" className="fs-4 primary-3 text-primary-3 link__signUp">
              Nouveau client ?
            </a>
          </div>
          </div>
          </div>
          </div>

          <div className="info__container d-flex justify-content-evenly">
            <div className="card m-2 shadow-beige largeCard">
    
              <div className="m-3 p-2">
                <h3 className="card-title text-primary-4">
                Devenez client en 3 étapes…
                </h3>
              <ul className="text-start">
                <li className="">
                <p>
                Vous me contactez par mail ou par téléphone pour connaître les
                modalités et les délais pour valider votre inscription.
                </p>
                </li>
                <li className="">
                <p>
                Vous vous pré - inscrivez en ligne. Je vous recommande
                l’inscription à la newsletter mensuelle pour être informé des
                nouveautés.
                </p>
                </li>
                <li className="">
                <p>
                Vous passez votre commande unique ou multiple et vous récupérez
                votre commande le jour dit au point de dépôt que vous aurez
                sélectionné             
                </p>
                </li>
              </ul>
              <p className="card-text text-sm-start mt-3 p-2">
                Les modalités de paiement varient d’un point de dépôt à un autre,
                celles-ci vous seront précisées au moment du récapitulatif de votre
                commande.
              </p>
              <p className="card-text text-sm-start mt-3 p-2 fw-bold">
                Une absence ou un changement d’avis ? Vous pouvez modifier ou
                annuler votre commande depuis votre espace personnel jusqu’au samedi
                20h pour les commandes du mardi et jusqu’au mardi 20h pour les
                commandes du vendredi
              </p>
              <p className="card-text text-sm-start mt-3 p-2">
                Texte à confimer selon les possibilité de blocage de commande
              </p>
              <p className="card-text text-sm-start mt-3">
                (Jusqu’à 2 jours avant la date de livraison choisie ?=> si pas
                possible de faire 52h avant alors « jusqu’à 3 jours avant la date de
                livraison choisie)
              </p>
              </div>

     
            </div>

            <div className="card m-2 shadow-red smallCard">
              <div className="m-3 p-2">

                <h3 className="card-title text-primary-4">
                  Quels sont les points de dépôt ?
                </h3>

              <ul className="text-start">

                <h5 className="mt-4 fw-bold">
                  Mardi- sur commande
                </h5>
                <li className="m-2 p-2">
                  Au Clermont Bar (Chirens) 15h-19h
                </li>
                <li className="m-2 p-2">
                  Chez Pizza Reydo (Bilieu) 17h30-22h
                </li>
              </ul>
  
              <ul className="text-start">
                <h5 className="fw-bold">
                  Vendredi- sur commande
                </h5>

                <li className="m-2 p-2">
                  Au Clermont Bar (Chirens) 15h-19h
                </li>
                <li className="m-2 p-2">
                  Chez le maraîcher Y. Berthollet (Saint-Nicolas-de-Macherin)
                  15h-19h*
                </li>
                <li className="m-2 p-2">
                  Aux Jardins du coteau (Saint-Cassien) 16h-19h*
                </li>
                <li className="m-2 p-2">
                  Pains bio en vente libre également chez les maraîchers.
                </li>
              </ul>

              </div>
            </div>
          </div>
            <div className="info__container">
              <div className="">
                <h3 className="info__container-title text-primary-4 m-2 p-2">
                  Où trouver mon pain paysan en dehors des points de dépôt ?
                </h3>
              </div>

              <div className="d-flex flex-column info__container-bottom">
                <p className="text  mt-3">
                  <span className="fw-bold">Aux Biaux légumes (Massieu) 16h-19h.</span> (possibilité de passer
                  commande auprès des maraichers)
                </p>
                <p className="text mt-3">
                  <span className="fw-bold">Charavine (Epices et Nous) : le mardi à partir de 11h.</span>
                  Possibilité de passer commande auprès de l’épicerie
                </p>
                <p className="text mt-3">
                  <span className="fw-bold">Montferrat (Les paniers du lac) : le mardi de 18h30 à 20h (à
                  vérifier)</span>. Etre adhérent de l’AMAP.
                </p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
