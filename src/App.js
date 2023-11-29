import './App.css';
import FaixaHeader from './componentes/FaixaHeader/FaixaHeader'
import Header from './componentes/Header/Header';
import { useState } from 'react';
import Previsao from './componentes/Previsao/Previsao';
import Rodape from './componentes/Rodape/Rodape';
import ListaPrevisao from './componentes/ListaPrevisao/ListaPrevisao';

function App() {
  const [cidade, setCidade] = useState("");
  const [graus, setGraus] = useState("");
  const [estado, setEstado] = useState("");
  const [texto, setTexto] = useState("");
  const [sensacao, setSensacao] = useState("");
  const [icone, setIcone] = useState("");
  const [vento, setVento] = useState("");
  const [direcaoVento, setDirecaoVento] = useState("");
  const [umidade, setUmidade] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [raiosUV, setRaiosUV] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [horario, setHorario] = useState("");
  const [chanceChuva, setChanceChuva] = useState("");
  const [nascerDoSol, setNascerDoSol] = useState("");
  const [porDoSol, setPorDoSol] = useState("");


  const handleCityChange = (cidade, data1, data2) => {
    // Atualize os estados com os dados de ambas as solicitações
    setCidade(cidade);
    setGraus(data1.current.temp_c);
    setEstado(data1.location.region);
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
  }


  return (
    <div className="App">
      {/* Render the Header component and pass the handleCityChange callback */}
      <Header onCityChange={handleCityChange} />

      {/* Render the FaixaHeader component and pass the required data as props */}
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

