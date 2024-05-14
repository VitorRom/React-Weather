import './Header.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onCityChange }) => {
  const [cidade, setCidade] = useState("");
  const [previsaoTempo, setPrevisaoTempo] = useState(null);
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [navBarActive, setNavBarActive] = useState(""); 

  const handleChange = (event) => {
    setCidade(event.target.value);
  };

  const handleSearch = () => {
    if (cidade) {
      fetch(`https://api.weatherapi.com/v1/current.json?key=3c56208e731c4536822115400231310&q=${cidade}&lang=pt`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error('Failed to fetch data from the API');
        })
        .then((data) => {
          setPrevisaoTempo(data);

          fetch(`https://api.weatherapi.com/v1/forecast.json?key=3c56208e731c4536822115400231310&q=${cidade}&days=11&lang=pt`)
            .then((response) => {
              if (response.status === 200) {
                return response.json();
              }
              throw new Error('Failed to fetch data from the second API');
            })
            .then((data2) => {
              onCityChange(cidade, data, data2);
              console.log(data2);
              setCidade(""); // Limpa o campo de pesquisa
            })
            .catch((error) => {
              console.error(error);
            });

          onCityChange(cidade, data);
        })
        .catch((error) => {
          console.error(error);
        });
      setLocationLoaded(true);
      setNavBarActive("searched");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    if (!locationLoaded) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.weatherapi.com/v1/current.json?key=3c56208e731c4536822115400231310&q=${latitude},${longitude}&lang=pt`)
            .then((response) => {
              if (response.status === 200) {
                return response.json();
              }
              throw new Error('Failed to fetch data from the API');
            })
            .then((data) => {
              const userCity = data.location.name;
              setCidade(userCity);
              setLocationLoaded(true);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      }
    }
  }, [locationLoaded]);

  useEffect(() => {
    if (locationLoaded) {
      handleSearch();
    }
  }, [locationLoaded]);

  return (
    <nav className={`navBar ${navBarActive === "searched" ? "navBar-active" : ""}`}>
      <img src="assets/logo.png" alt="Logo" />
      <div className="search-container">
        <div className="input-container">
          <input
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="text"
            id="searchInput"
            placeholder="Busque por sua cidade..."
            value={cidade}
          />
          <FontAwesomeIcon
            onClick={handleSearch}
            flip="horizontal"
            icon={faSearch}
            className="search-icon"
          />
        </div>
      </div>
      {previsaoTempo ? (
        <div className="mt-4">
        </div>
      ) : null}

      {!locationLoaded && (
        <div className="location-popup">
          <p>Por favor, ative a localização e recarregue a página para obter informações da sua localização atual.</p>
          <span className="close-button" onClick={() => setLocationLoaded(true)}>X</span>
        </div>
      )}
    </nav>
  );
};

export default Header;
