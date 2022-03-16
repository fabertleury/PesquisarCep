import { useState } from "react";

import { Content, Container, Main } from "./styles";
import { FiSearch } from 'react-icons/fi'

import api from "../../services/api";


export function Card(){

  
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');
  
  async function handleClickSearch(){
    
    if(input === '') {
      alert("Preencha algum CEP!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('');

    }catch{
      alert("Erro ao buscar o seu CEP, digite um CEP válido!")
      setInput("");

    }

  } 


  return(
  <Container>
    <h1>Buscador de CEP</h1>        
      <Content>

            <input
            type="text"
            placeholder="Digite seu cep..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
            />  
        
            <button onClick={handleClickSearch}>
            <FiSearch size={25} color="#FFF"></FiSearch>
            </button>

      </Content>

    <Main>

        <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

    </Main>
    
  </Container>
    
    
  );
}