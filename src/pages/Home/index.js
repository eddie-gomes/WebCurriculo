import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../../components/Header-Home';
import './styles.css'

export default function HomePage() {
  return (
    <div className='containerHomePage'>

      <HeaderHome />
      <div className='body'>
        <Link to="/sobremim">
          <button>sobre mim</button>
        </Link>
        <Link to="/competencias">
          <button>competências</button>
        </Link>
        <Link to="/contatos">
          <button>contatos</button>
        </Link>
      </div>

    </div>
  );
}