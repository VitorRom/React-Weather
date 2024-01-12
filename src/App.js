import './App.css';
import FaixaHeader from './componentes/FaixaHeader/FaixaHeader'
import Header from './componentes/Header/Header';
import { useState } from 'react';
import Previsao from './componentes/Previsao/Previsao';
import Rodape from './componentes/Rodape/Rodape';
import ListaPrevisao from './componentes/ListaPrevisao/ListaPrevisao';
import ListaDiaria from './componentes/ListaDiaria/ListaDiaria';
import moment from 'moment-timezone';
import ProximosDias from './componentes/ProximosDias/ProximosDias';


function App() {

  const [timeZone, setTimeZone] = useState(""); 
  const [cidade, setCidade] = useState("");
  const [graus, setGraus] = useState("");
  const [estado, setEstado] = useState("");
  const [texto, setTexto] = useState("");
  const [itsDay, setItsDay] = useState("");
  const [sensacao, setSensacao] = useState("");
  const [icone, setIcone] = useState("");
  const [vento, setVento] = useState("");
  const [direcaoVento, setDirecaoVento] = useState("");
  const [umidade, setUmidade] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [raiosUV, setRaiosUV] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [horario, setHorario] = useState("");
  const [horariosDia, setHorariosDia] = useState([]);
  const [temperaturaHorarios, setTemperaturaHorarios] = useState([]);
  const [imagensDia, setImagensDia] = useState([]);
  const [chanceChuva, setChanceChuva] = useState("");
  const [nascerDoSol, setNascerDoSol] = useState("");
  const [porDoSol, setPorDoSol] = useState("");
  const [diaSeguinte, setDiaSeguinte] = useState("");
  const [diaSeguinte2, setDiaSeguinte2] = useState("");
  const [minTempDia1, setMinTempDia1] = useState("");
  const [minTempDia2, setMinTempDia2] = useState("");
  const [maxTempDia1, setMaxTempDia1] = useState("");
  const [maxTempDia2, setMaxTempDia2] = useState("");
  const [iconeDia1, setIconeDia1] = useState("");
  const [iconeDia2, setIconeDia2] = useState("");



  const handleCityChange = (cidade, data1, data2) => {

    setCidade(cidade);
    setGraus(data1.current.temp_c);
    setEstado(data1.location.region);
    setItsDay(data1.current.is_day);
    setTexto(data1.current.condition.text);
    setSensacao(data1.current.feelslike_c);
    setIcone(data1.current.condition.icon);
    setVento(data1.current.wind_kph);
    setDirecaoVento(data1.current.wind_dir);
    setUmidade(data1.current.humidity);
    setRaiosUV(data1.current.uv);
    setMinTemp(data2.forecast.forecastday[0].day.mintemp_c);
    setMaxTemp(data2.forecast.forecastday[0].day.maxtemp_c);
    setHorario(data1.current.last_updated);
    setChanceChuva(data2.forecast.forecastday[0].day.daily_chance_of_rain);
    setNascerDoSol(data2.forecast.forecastday[0].astro.sunrise);
    setPorDoSol(data2.forecast.forecastday[0].astro.sunset);
    setDiaSeguinte(data2.forecast.forecastday[1].date);
    setDiaSeguinte2(data2.forecast.forecastday[2].date);
    setMinTempDia1(data2.forecast.forecastday[1].day.mintemp_c);
    setMinTempDia2(data2.forecast.forecastday[2].day.mintemp_c);
    setMaxTempDia1(data2.forecast.forecastday[1].day.maxtemp_c);
    setMaxTempDia2(data2.forecast.forecastday[2].day.maxtemp_c);
    setIconeDia1(data2.forecast.forecastday[1].day.condition.icon);
    setIconeDia2(data2.forecast.forecastday[2].day.condition.icon);

    const timeZone = data1.location.tz_id;
    setTimeZone(timeZone);
    
    const horaAtualCidade = moment.tz(data1.current.last_updated, timeZone).hours();


    let horarios = [];
    let temperaturas = [];
    let imagens = [];

    for (let i = horaAtualCidade + 1; i < data2.forecast.forecastday[0].hour.length; i++) {
      let horaDoItem = new Date(data2.forecast.forecastday[0].hour[i].time).getHours();
      let temperatura = data2.forecast.forecastday[0].hour[i].temp_c;
      let imagemAtual = data2.forecast.forecastday[0].hour[i].condition.icon;


      let horaFormatada = horaDoItem % 12 || 12;
      let periodo = horaDoItem < 12 ? 'am' : 'pm';
      let horarioCompleto = `${horaFormatada}${periodo}`;


      horarios.push(horarioCompleto);
      temperaturas.push(temperatura);
      imagens.push(imagemAtual);
    }

    setHorariosDia(horarios);
    setTemperaturaHorarios(temperaturas);
    setImagensDia(imagens);

  }


  

  let weatherClass = '';

  if (texto === 'Parcialmente nublado') {
    weatherClass = 'partly_cloudy';
  } else if (texto === 'Possibilidade de chuva irregular') {
    weatherClass = 'rain_possibility'
  } else if (texto === 'Sol' || texto === 'Céu limpo') {
    weatherClass = 'sunny'
  } else if (texto === 'Encoberto') {
    weatherClass = 'cloudy'
  } else if (texto.includes("Chuvisco") || texto === 'Aguaceiros fracos') {
    weatherClass = 'rain_sun';
  } else if (texto === 'Chuva forte' || texto.includes("Chuva forte")) {
    weatherClass = 'heavy_rain'
  } else if (texto === 'Neblina' || texto === 'Nevoeiro' || texto === 'Nublado') {
    weatherClass = 'fog'
  } else if (texto.includes("Chuva")) {
    weatherClass = 'rain_sun';
  } else {
    weatherClass = 'partly_cloudy'
  }



  if (itsDay === 0 & texto === 'Neblina' || itsDay === 0 & texto === 'Nevoeiro' || itsDay === 0 & texto === 'Encoberto' || itsDay === 0 & texto === 'Nublado') {
    weatherClass = 'night_fog'
  }
  else if (itsDay === 0) {
    weatherClass = 'night'
  }


  if (itsDay === 0 & texto.includes("Chuva") || itsDay === 0 & texto.includes("Chuvisco")) {
    weatherClass = 'rain_sun'
  }


  return (
    <div className={`App ${weatherClass}`}>

      <Header onCityChange={handleCityChange} />


      <FaixaHeader
        cidade={cidade}
        estado={estado}
        graus={graus} />

      <div className='home'>

        <Previsao cidade={cidade}
          estado={estado}
          graus={graus}
          texto={texto}
          minTemp={minTemp}
          maxTemp={maxTemp}
          img={icone}
        >

        </Previsao>
        <ListaDiaria
          horariosDia={horariosDia}
          temperaturaHorarios={temperaturaHorarios}
          imagensDia={imagensDia}
          graus={graus}
          img={icone}>

        </ListaDiaria>
        <ProximosDias img={icone}
          minTemp={minTemp}
          maxTemp={maxTemp}
          diaSeguinte={diaSeguinte}
          diaSeguinte2={diaSeguinte2}
          minTempDia1={minTempDia1}
          minTempDia2={minTempDia2}
          maxTempDia1={maxTempDia1}
          maxTempDia2={maxTempDia2}
          iconeDia1={iconeDia1}
          iconeDia2={iconeDia2}
          timeZone={timeZone}
        ></ProximosDias>


          <ListaPrevisao
          sensacao={sensacao}
          direcaoVento={direcaoVento}
          vento={vento}
          chanceChuva={chanceChuva}
          umidade={umidade}
          raiosUV={raiosUV}
          horario={horario}
          nascerDoSol={nascerDoSol}
          porDoSol={porDoSol}
        >
        </ListaPrevisao> 


        <Rodape></Rodape>

      </div>

    </div>
  );
}
export default App;

