import React from 'react';
import './ListaPrevisao.css'


export const ListaPrevisao = (props) => {

    const dataHora = props.horario;
    const hora = dataHora.split(' ')[1];
    var textoUV = props.raiosUV;

  if (textoUV <= 2.9) {
    textoUV = "Baixo";
  } else if (textoUV >= 2.9 && textoUV <= 5.9) {
    textoUV = "Moderado";
  } else if (textoUV >= 6.0 && textoUV <= 7.9) {
    textoUV = "Alto";
  } else if (textoUV >= 8.0 && textoUV <= 10.9) {
    textoUV = "Muito alto";
  } else {
    textoUV = "Extremo";
  }
  


    return(
        <div>
        <ul className='lista-previsao'>

          <li className='li-1'><img src='assets\sensacao-termica.png' alt='Imagem Sensação Térmica' className='img-sensacao-termica'></img> <p>Sensação térmica de {props.sensacao}º</p></li>
          <li className='li-2'><img src='./assets\vento.png' alt='Imagem Vento' className='img-vento'></img> <p>Vento {props.vento}kh/h • {props.direcaoVento}</p></li>
          <li className='li-3'><img src='assets\rain_light.png' className='img-chuva' alt='Imagem Chuva'></img> <p>Chance de chuva {props.chanceChuva}%</p></li>
          <li className='li-4'><img src='assets\umidade.png' className='img-umidade' alt='Imagem Umidade'></img> <p>Umidade {props.umidade}%</p></li>
          <li className='li-5'><img src='assets\uv.png  ' alt='Raios UV'></img> <p>Raios UV  {textoUV}</p></li>
          <li className='li-6'><img src='assets\horario-atualizacao.png' className='img-horario-atualizacao' alt='Horário de Atualização' /><p>Horário da atualização: {hora}</p></li>
          <li className='li-7'><img src='assets\nascer-sol.png' className='img-nascer-sol' alt='Horário do Nascer do sol' /><p>Nascer do Sol {props.nascerDoSol}</p></li>
          <li className='li-8'><img src='assets\por-do-sol.png' className='img-por-sol' alt='Horário do pôr do sol' /><p>Pôr do Sol {props.porDoSol}</p></li>

        </ul>
      </div>
    )
}

export default ListaPrevisao