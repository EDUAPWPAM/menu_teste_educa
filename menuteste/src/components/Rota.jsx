import React from "react";
import { Switch, Route} from "react-router-dom";

import Home from "../pages/Home";
import Materias from "../pages/Materias";
import Perfil from "../pages/Perfil";
import Sobre from "../pages/Sobre";

export default function Rota (){
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/Sobre">
            <Sobre/>
        </Route>

        <Route exact path="/Materias">
            <Materias/>
        </Route>

        <Route exact path="/Perfil">
            <Perfil/>
        </Route>

    </Switch>
}