import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import email from '../../assets/email.png';
import telegram from '../../assets/telegram.png';
import { Link } from 'react-router-dom';
import './styles.css'

export default function Contatos() {
  return (
    <div className='containerContatos'>
      <h1>
        Edvan Barreira Gomes Júnior - Contatos
      </h1>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <div className='containerList'>
        <h2>
          <img src={github} alt='githubImage' />
          <blockquote />
          Git hub: @eddie-gomes
          <br />
          <blockquote />ttps://github.com/eddie-gomes
        </h2>
      </div>
      <div className='containerList'>
        <h2>
          <img src={linkedin} alt='linkedinImage' />
          <blockquote />
          Linkedin: Edvan Barreira Gomes Júnior
          <br />
          <blockquote />
          linkedin.com/in/edvan-barreira-gomes-júnior-858a85191
        </h2>
      </div>
      <div className='containerList'>
        <h2>
          <img src={email} alt='emailImage' />
          <blockquote />
          E-mail: edvan.bgjunior@gmail.com
        </h2>
      </div>
      <div className='containerList'>
        <h2>
          <img src={telegram} alt='telegramImage' />
          <blockquote />
          Telegram: @eddie_gomes
        </h2>
      </div>
      <div className='containerButton'>
        <Link to="/sobremim">
          <button>sobre mim</button>
        </Link>
        <Link to="/competencias">
          <button>competências</button>
        </Link>
      </div>
    </div>
  );
}