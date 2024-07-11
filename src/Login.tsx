import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Logar} from "./components/Logar";
import { Header } from "./components/Header";

export function Login(){
    const [name, setName] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const navigate = useNavigate();


    const getNome = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    };

    const getSenha = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSenha(e.target.value);

    };

    const submit = async (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        await initiLogar();
    }
     
    async function initiLogar(){
        localStorage.setItem('name', name);
        localStorage.setItem('senha', senha);
        await Logar(name,senha,navigate)
    }

    return (
        <form onSubmit={submit}>
            <div className="contentlogin">
                <Header text='Logar'/>

                <label className="name" htmlFor="Name">Name</label>
                <input onChange={getNome} type="text" className='nome ml-1 mt-16 mb-8 border-none outline-0'  name='Username' placeholder='Name:'/>

                <label className="senhalog" htmlFor="senha">Senha</label>
                <input onChange={getSenha} className='senha border-none outline-0' type="password" name='password' placeholder='Senha:'/>
                <br />

                <button type="submit" className="buttonlog">Login</button>


            </div>

        </form> 
    )
}

