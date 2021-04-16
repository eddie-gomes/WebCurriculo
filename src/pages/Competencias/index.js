import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

export default function Competencias() {
  return (
    <div className='containerCompetencias'>
      <h1>
        Edvan Barreira Gomes Júnior - competências
      </h1>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <h2>
        - Inglês nível intermediário, capaz de ler, escrever, falar e entender razoavelmente;
        <br />
        - Conhecimento básico de desevolvimento mobile, tendo já atuado no desenvolvimento de um produto de software em React Native, atuando tanto no backend quanto no frontend;
        <br />
        - Conhecimento básico de desenvolvimento de desenvolvimento web, com experiência em desenvolvimento de páginas em React.
        <br />
      </h2>
      <div className='containerButton'>
        <Link to="/sobremim">
          <button>sobre mim</button>
        </Link>
        <Link to="/contatos">
          <button>contatos</button>
        </Link>
      </div>
    </div>
  );
}