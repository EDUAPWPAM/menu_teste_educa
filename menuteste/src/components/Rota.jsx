import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Materias from "../pages/Materias";
import Perfil from "../pages/Perfil";
import Sobre from "../pages/Sobre";

export default function Rota (){
    return(
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/materias' element={<Materias/>} />
        <Route path='/perfil' element={<Perfil/>} />
        <Route path='/sobre' element={<Sobre/>} />
    </Routes>
    );
}