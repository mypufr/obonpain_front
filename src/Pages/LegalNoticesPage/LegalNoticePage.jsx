import React from "react";


export default function LegalNoticesPage() {
  return (
    <div>
      <div className="border p-3 mt-1 mb-1 bg-primary-1 opacity-75">
      <h3 className="m-3 p-2">Identité et coordonnées du propriétaire du site</h3>
        <ul className="">
          <li className="text-sm-start mt-3">Noémie Gadessaud</li>
          <li className="text-sm-start mt-3">13 impasse des barraux</li>
          <li className="text-sm-start mt-3">38850 Chirens</li>
          <li className="text-sm-start mt-3">lagrangedelainan@mailo.com</li>
          <li className="text-sm-start mt-3">07.82.23.85.31</li>
          <li className="text-sm-start mt-3">Forme juridique: micro-entreprise</li>
          <li className="text-sm-start mt-3">Hébergeur du site: OVH, 2 rue Kellermann - 59100 Roubaix, France ( <a className="ms-1" href="https://www.ovh.com">https://www.ovh.com )</a> (à confirmer)</li>
          <li className="text-sm-start mt-3">Tél. +33 (0)8 99 70 17 61 (à vérifier)</li>
        </ul>

     <h3 className="m-3 p-2">Propriété intellectuelle</h3>

        <p className="text-sm-start m-2 p-1">Le contenu du site est la propriété exclusive de Noémie Gadessaud.</p>
        <p className="text-sm-start m-2 p-1">Le contenu et les photographie sont l’oeuvre de Noémie Gadessaud (à préciser par rapport à l’utilisation de la photo en bandeau, est-ce libre de droit et si oui il faudra noter la source).</p>
        <p className="text-sm-start m-2 p-1">Le logo de la Grange de l’Ainan est l’oeuvre d’Alexandre Gadessaud</p>
        <p className="text-sm-start m-2 p-1">Aucune reproduction, distribution, modification ou utilisation du contenu n’est autorisée sans l’accord préalable de Noémie Gadessaud.</p>

      <h3 className="m-3 p-2">Protection des données personnelles</h3>

        <p className="text-sm-start m-2 p-1">Les informations personnelles demandées sur le site sont nécessaires à l’enregistrement et au bon traitement des commandes. Ces informations ne seront pas transmises à des tiers sans consentement préalable, sauf si requis par la loi.</p>
        <p className="text-sm-start m-2 p-1">Les utilisateurs disposant d’un espace personnel ont un droit de modifier, de rectifier et de supprimer leurs données personnelles. Ce droit s’exerce par mail à l’adresse mail suivante: lagrangedelainan@mailo.com</p>
        <p className="text-sm-start m-2 p-1">Les données recueillies lors de l’inscription sont stockées dans un fichier informatique par Noémie Gadessaud. Afin de valider l’inscription, toutes les données obligatoires du formulaire doivent impérativement être fournies. Ces informations personnelles sont conservées jusqu’à la fermeture de l’espace personnel.</p>
        <p className="text-sm-start m-2 p-1">Pour plus d’information, rendez-vous sur
        <a className="ms-1" href="https://www.cnil.fr/fr/la-loi-informatique-et-libertes">https://www.cnil.fr/fr/la-loi-informatique-et-libertes</a></p>  

      <h3 className="m-3 p-2">Cookies</h3>
        <p className="text-sm-start m-2 p-1">Seuls les cookies obligatoires, indispensables à la navigation sur le site et les cookies fonctionnels, nécessaire au fonctionnement du site sont utilisés. Ces cookies ne contiennent pas de données personnelles et ne requièrent pas de consentement préalable.</p>

      <h3 className="m-3 p-2">Limitation de responsabilité :</h3>
        <p className="text-sm-start m-2 p-1">Le site est fourni tel quel, sans garantie d’aucune sorte.</p>
        <p className="text-sm-start m-2 p-1">Droit applicable et juridiction compétente : Les présentes mentions légales sont régies par les lois françaises.</p>

      </div>
    </div>
  );
}