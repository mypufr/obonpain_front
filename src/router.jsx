// page des visiteurs
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import SignInPage from "./Pages/SignInPage/SignInPage.jsx";
import LegalNoticesPage from "./Pages/LegalNoticesPage/LegalNoticesPage.jsx";
import CategoryListPage from "./Pages/CategoryListPage/CategoryListPage.jsx";
import BreadDetailPage from "./Pages/BreadDetailPage/BreadDetailPage.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

// page dashboard client
import DashboardClientPage from "./Pages/DashboardClientPage/DashboardClientPage.jsx";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import OrderDetails from "./Pages/OrderDetails/OrderDetails.jsx";
import OrderHistory from "./Pages/OrderHistory/OrderHistory.jsx";
import ClientInfoPage from "./Pages/ClientInfoPage/ClientInfoPage.jsx";

import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";

export const router = createBrowserRouter([
  // la syntaxe createBrowserRouter est une méthode pour déclarer un router avec react. C'est la syntaxe "moderne, recommandé".
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "accueil",
        element: <HomePage />,
      },
      {
        path: "connexion",
        element: <LoginPage />,
      },
      {
        path: "inscription",
        element: <SignInPage />,
      },
      {
        path: "gammes-pains",
        element: <CategoryListPage />,
      },
      {
        path: "details-gammes/:breads",
        element: <BreadDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "mentions-legales",
        element: <LegalNoticesPage />,
      },

      // page dashboard client

      {
        path: "dashboard-client",
        element: <DashboardClientPage />,
      },
      {
        path: "panier",
        element: <CartPage />,
      },

      {
        path: "historique-commandes",
        element: <OrderHistory />,
      },
      {
        path: "detail-commande",
        element: <OrderDetails />,
      },
      {
        path: "info-personnelle",
        element: <ClientInfoPage />,
      },
    ],
  },
]);
