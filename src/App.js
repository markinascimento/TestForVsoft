import React, { useState } from 'react';

import './style.css'

import Logo from './icon.svg';

const App = () => {
  
  function createAccount(){
    alert('Usário encontrado!');
  }

  return(
    <section className="containerMain">
      
      <section className="containerLogo"> 
        <div className="viewLogo" >
          <img src={Logo} alt="Logo"/>
          <h1 className="textLogo"> exameteórico </h1>
        </div>
        <div className="viewText" >
          <h2 className="oneText"> Uma forma segura para realizar o seu exame </h2>
          <p className="paragraph"> Sua prova em formato on-line. Faça o seu exame de forma segura e sem sair de casa </p>
        </div>
      </section> 

      <section className="containerSelect" >
        <div className="viewProblem" >
          <p className="textHelp" > Problemas no login? </p>
          <a href="https://www.linkedin.com/in/marcoss-vinicius/" className="linkHelp" > Ajuda </a>
        </div>
        <h1 className="welcome" > Bem-Vindo </h1>
        <p className="title" > Olá, candidato! </p>
        <p className="titleDice" > Para continuar, escolha o estado e digite o CPF. </p>
        <div className="viewSelect" >
          <input 
              placeholder="Selecione o estado"
              className="input"  
              type="text"
          />
          <select className="select" >
            <option> AC </option>
            <option> AL </option>
            <option> AP </option>
            <option> AM </option>
            <option> BA </option>
            <option> CE </option>
            <option> DF </option>
            <option> ES </option>
            <option> SP </option>
            <option> RJ </option>
            <option> PB </option>
          </select>
        </div>
        
        <input 
          placeholder="Digite o seu CPF"
          className="input"
          type="numeric"
        />  
        <button onClick={createAccount} className="btnLogin" > Acessar </button>
      </section>

    </section>
  );
};

export default App;