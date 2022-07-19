import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "../pages/Home";
import Materias from "../pages/Materias";
import Perfil from "../pages/Perfil";
import Sobre from "../pages/Sobre";

export default function Rota (props){
    <BrowserRouter>
        <Route path="/Home">
            <Home/>
        </Route>

        <Route path="/Sobre">
            <Sobre/>
        </Route>

        <Route path="/Materias">
            <Materias/>
        </Route>

        <Route path="/Perfil">
            <Perfil/>
        </Route>

    </BrowserRouter>
}