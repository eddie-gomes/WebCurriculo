import React from 'react';
import fotoperfil from '../../assets/fotoperfil.jpeg';
import { Link } from 'react-router-dom';
import './styles.css'

export default function SobreMim() {
  return (
    <div className='containerSobreMim'>
      <h1>
        Edvan Barreira Gomes Júnior - Sobre mim
      </h1>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <div className='containerTexto'>
        <h2>
          Me chamo Edvan e nasci em 09 de maio de 1999 no interior do Tocantis. Comecei meus estudos em Engenharia Eletrônica na UnB, mas foi em Engenharia de Software que eu encontrei o que eu gosto e quero fazer. Atualmente possuo interesse em desevolvimento web e em gamificação, mas gosto também de sempre estudar novas técnologias e aprender coisas que me permitam construir cada vez mais.
        </h2>
        <img src={fotoperfil} alt='fotoperfilImage' />
      </div>
      <div className='containerButtons'>
        <Link to="/competencias">
          <button>competências</button>
        </Link>
        <blockquote />
        <Link to="/contatos">
          <button>contatos</button>
        </Link>
      </div>

    </div>
  );
}