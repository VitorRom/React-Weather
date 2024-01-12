import React from 'react';
import './ListaDiaria.css';

const ListaDiaria = (props) => {
  var urlImagem = props.imagensDia;
  var urlImagemAgora = props.img;
  
  return (
    <div className='ListaDiaria'>
      <ul>
     
        <li>
          <p>Now</p>
          <img src={urlImagemAgora} alt="Imagem atual"/>
          <p>{props.graus}º</p>
        </li>

        {props.horariosDia && props.horariosDia.map((horario, index) => (
          <li key={index + 1}>
            <p>{horario}</p>
            {urlImagem && <img src={urlImagem[index]} alt={`Imagem do Dia ${index}`} />}
            {props.temperaturaHorarios && <p>{props.temperaturaHorarios[index]}º</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDiaria;
