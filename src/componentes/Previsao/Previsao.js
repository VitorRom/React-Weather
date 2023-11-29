import React from 'react';
import './Previsao.css'

const Previsao = (props) => {
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const dataAtual = new Date();
  const diaDaSemana = diasDaSemana[dataAtual.getDay()];



  return (
    <div >
      <div className='home-container'>
        <div className='texto-clima'>
          <p className='txt-dia'>Hoje, {diaDaSemana}</p>
          <h2 className='cidade-estado'>{props.cidade}, {props.estado}</h2>
          <div className='texto-home'> <p> O clima está "{props.texto}"</p></div>
        </div>
        <div className='container-temperatura'> 
          <div className='temperatura'>
            <img src={props.img} className='img-temperatura' /><p>Temperatura {props.graus}º</p>
          </div>
          <div className='min-max'>


            <div>
              <img className='seta' src='.\assets\seta-baixo.svg' alt='Imagem Seta Temperatura Minima'></img>
              <p>Mínima de {props.minTemp}º</p>
            </div>
            <div>
              <img className='seta' src='.\assets\seta-cima.svg' alt='Imagem Seta Temperatura Maxima'></img>
              <p>Máxima de {props.maxTemp}º</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previsao


