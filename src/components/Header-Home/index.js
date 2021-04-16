import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './styles.css';
import fotoperfilquadrada from '../../assets/fotoperfilquadrada.jpeg';

export default function HeaderHome() {
  return (
    <div className='componentHeader'>
      <img src={fotoperfilquadrada} alt='fotoperfilquadradaImage' />
      <div className='componentBody'>
        <h1>
          Edvan Barreira Gomes Júnior
        </h1>
        <h2>
          Graduando de Engenharia de Software pela Universidade de Brasilía-Campus Gama
        </h2>
      </div>
    </div>
  );
}
