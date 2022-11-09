import './App.css';
import CurrentWeather from './views/currentWeather';
import WeatherDetails from './views/weatherDetails';
import {fetchWeather} from './features/weather/weatherSlides';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { ErrorMessage } from './views/errorMessage';

function App() {
  
  const {data:{error:{message}}, loading}  = useSelector(state=> state.weather);

  const dispatch = useDispatch();


  useEffect(()=>{
    setTimeout(()=>{
      dispatch(fetchWeather());
    }, 2000)
  }, [dispatch]);

    return (
        <div className="App">
          {
            loading ? <div className='loader-container'><span className="loader"></span></div> : 
            <>
            {
              message === "" ? undefined : <ErrorMessage message={message}/>
            }
            <CurrentWeather />
            <WeatherDetails />
            </>
          }
        </div>
    );
}

export default App;