import './App.css';
import CurrentWeather from './views/currentWeather';
import WeatherDetails from './views/weatherDetails';
import {fetchWeather} from './features/weather/weatherSlides';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { ErrorMessage } from './views/errorMessage';

function App() {
  
  const {error:{message}} = useSelector(state=> state.weather);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchWeather())
  }, [dispatch])

  return (
    <div className="App">
      {
        message === "" ? undefined : <ErrorMessage message={message}/>
      }
      <CurrentWeather />
      <WeatherDetails />
    </div>
  );
}

export default App;
