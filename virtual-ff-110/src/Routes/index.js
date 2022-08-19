import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageCero from "../Pages/PageCero";
import EquipoPage from "../Pages/EquipoPage";
import EstadisticasPage from "../Pages/EstadisticasPage";
import NotFoundPage from '../Pages/NotFoundPage'
import RegistroPage from '../Pages/RegistroPage'
import ResultadosPage from '../Pages/ResultadosPage'
import TablaPage from '../Pages/TablaPage'

export const CaptaRoute = () => {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageCero />} />
          <Route path="/Equipo" element={<EquipoPage />} />
          <Route path="/Estadisticas" element={<EstadisticasPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/Registro" element={<RegistroPage />} />
          <Route path="/Resultados" element={<ResultadosPage />} />
          <Route path="/Tabla" element={<TablaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default CaptaRoute;
