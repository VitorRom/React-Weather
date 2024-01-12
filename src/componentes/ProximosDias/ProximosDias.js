import React from 'react';
import './ProximosDias.css';

const ProximosDias = (props) => {
  const { diaSeguinte, diaSeguinte2} = props;

  const data1 = new Date(diaSeguinte);

 const data2 = new Date(diaSeguinte2);

  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  const diaDaSemana1 = diasDaSemana[data1.getDay()];
  const diaDaSemana2 = diasDaSemana[data2.getDay()];

  const imgAtual = props.img;
  const imgDia1 = props.iconeDia1;
  const imgDia2 = props.iconeDia2;

  return (
    <div className='proximosDias'>
      <p className='previsao-pc'>Previsão para os próximos dias</p>
      <ul>
        <p className='previsao-mobile'>Previsão para os próximos dias</p>
        <li><p className='dia'>Hoje</p><img src={imgAtual} alt='icone temperatura dia atual'/><p className='minimo-temp'>Min {props.minTemp}°</p><p className='maximo-temp'>Max {props.maxTemp}°</p></li>
        <li><p className='dia'>{diaDaSemana1}</p><img src={imgDia1} alt='icone temperatura dia seguinte' /><p className='minimo-temp'>Min {props.minTempDia1}°</p><p className='maximo-temp'>Max {props.maxTempDia1}°</p></li>
        <li><p className='dia'>{diaDaSemana2}</p><img src={imgDia2} alt='icone temperatura 2 dias após dia atual '/><p className='minimo-temp'>Min {props.minTempDia2}°</p><p className='maximo-temp'>Max {props.maxTempDia2}°</p></li>
      </ul>
    </div>
  );
}

export default ProximosDias;
