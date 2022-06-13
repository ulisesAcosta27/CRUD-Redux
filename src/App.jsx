import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditarProducto from "./components/EditarProducto";

import Header from "./components/Header";
import NuevoProducto from "./components/NuevoProducto";
import Productos from "./components/Productos";
import store from "./redux/store";

function App() {
  return (
    <Router>
        <Header />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/productos/nuevo" element={<NuevoProducto />} />
          <Route path="/productos/editar/:id" element={<EditarProducto />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
