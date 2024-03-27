import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { Provider } from "react-redux";
import store from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

/* Le "provider store" fait référence à un composant spécifique appelé <Provider> fourni par Redux, qui enveloppe votre application React et rend le store Redux accessible à tous les composants. */
/* Même principe pour le RouterProvider. Le router devient accessible partout dans l'application */
