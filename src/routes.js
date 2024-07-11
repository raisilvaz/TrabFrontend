import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Cadpro} from "./pages/produtos";
import {Login} from "./login";
import {Perfil} from "./pages/perfil";
import {Home} from "./pages/Home";
import {Cadastrar} from "./pages/Cadastro";
import {Comprar} from "./pages/Comprar";




export function RouteApp(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/comprar" element={<Comprar/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="./cadpro" element={<Cadpro/>}/>
        <Route path="./perfil" element={<Perfil/>}/>
        <Route path="/cadasatro" element={<Cadastrar/>}/>



        </Routes>
        </BrowserRouter>
    )
}
