import { useSelector } from 'react-redux';
import { SearchBox } from './components/searchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faDroplet, faWind, faSignsPost } from '@fortawesome/free-solid-svg-icons';

import './style.css';
export default function WeatherDetails(){
    const {details} = useSelector(state => state.weather); 
    return (
        <div className="weather-details">
            <SearchBox/>
            <h3 className="weather-details__city">{details.location.name}</h3>
            <ul className="weather-details__data">
                <li>
                    <FontAwesomeIcon className="weather-details__icon" icon={faWind}/>
                    <p>{details.weatherDetails.wind.velocity.kph}</p>
                </li>
                <li>
                    <FontAwesomeIcon className="weather-details__icon" icon={faCloud}/>
                    <p>{details.weatherDetails.cloud}</p>
                </li>
                <li>
                    <FontAwesomeIcon className="weather-details__icon" icon={faSignsPost}/>
                    <p>{details.weatherDetails.wind.dir}</p>
                </li>
                <li>
                    <FontAwesomeIcon className="weather-details__icon" icon={faDroplet}/>
                    <p>{details.weatherDetails.humidity}</p>
                </li>
            </ul>
        </div>
    )
}