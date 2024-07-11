import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Prodf() {
  const nav = useNavigate();
  const [nome_pro, setNomePro] = useState<string>('');
  const [descri_pro, setDescriPro] = useState<string>('');
  const [fabri_pro, setFabriPro] = useState<string>('');
  const [qtd_pro, setQtdPro] = useState<number>(0);
  const [preco_pro, setPrecoPro] = useState<number>(0);

  const getProduto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomePro(e.target.value);
  };

  const getDescri = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriPro(e.target.value);
  };

  const getFabri = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFabriPro(e.target.value);
  };

  const getQtd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQtdPro(Number(e.target.value));
  };
  
  const getPreco = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrecoPro(Number(e.target.value));
  };

  const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registro();
  }

  async function registro() {
    if (nome_pro === '' || descri_pro === '' || qtd_pro === 0 || preco_pro === 0 || fabri_pro === '') {
      alert('Não deixe nenhum campo em branco');
    } else {
      try {
        await axios.post('', {
          pro_nome: nome_pro,
          pro_descri: descri_pro,
          pro_preco: preco_pro,
          qtda_pro: qtd_pro,
          pro_fabri: fabri_pro 
        });
        console.log('Produto cadastrado com sucesso!');
        nav('/Home');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <header>
        <button onClick={() => nav('/Raiz')}>Produto</button>
      </header>
      <form onSubmit={Submit}>
        <div className="Content">
          <label className="pronome" htmlFor="produto">Produto</label>
          <input onChange={getProduto} type="text" className="nome ml-1 mt-16 mb-4 border-none outline-0" name="produto" placeholder="Nome do produto:" />

          <label className="prodescri" htmlFor="descri">Descrição</label>
          <input onChange={getDescri} type="text" className="senha border-none mb-4 outline-0" name="descri" placeholder="Descrição:" />
          <br />

          <label className="profabri" htmlFor="fabri">Fabricante</label>
          <input onChange={getFabri} type="text" className="senha mb-4 border-none outline-0" name="fabricante" placeholder="Nome do fabricante:" />

          <label className="Proqtda" htmlFor="qtda">Quantidade</label>
          <input onChange={getQtd} type="number" className="senha border-none mb-4 outline-0" name="qtda" placeholder="Quantidade:" />

          <label className="propreco" htmlFor="preco">Preço</label>
          <input onChange={getPreco} type="number" className="senha border-none outline-0" name="preco" placeholder="Preço:" />
          <br />

          <button type="submit" className="botaoenv">Enviar</button>
        </div>
      </form>
    </>
  );
}
