import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Data = {
    cli_cod: number,
    cli_email: string,
    cli_nome: string,
    cli_password: string,
    cli_qtdavendas: number,
    cli_tel: string
}

export function Perfil() {
    const [dados, setDados] = useState<Data | null>(null);
    const nav = useNavigate();

    async function getData() {
        try {
            const result = await axios.get('/api/perfil');
            setDados(result.data[0]);
        } catch (error) {
            console.error('Erro ao obter dados do perfil:', error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='bg-gray-300 mx-auto w-96'>
                <Header text='Dados' func={() => nav('/Home')} />
                
                {dados && (
                    <>
                        <p className='text-black ml-4 text-xl'>ID: {dados.cli_cod}</p>
                        <p className='text-black ml-4 text-xl'>Email: {dados.cli_email}</p>
                        <p className='text-black ml-4 text-xl'>Tel: {dados.cli_tel}</p>
                    </>
                )}
            </div>
        </>
    );
}
