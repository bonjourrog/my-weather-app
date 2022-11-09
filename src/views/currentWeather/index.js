import { useSelector } from 'react-redux'
import './style.css'
export default function CurrentWeather(){

    const {data:{current}} = useSelector(state => state.weather);

    return(
        <div className="current-weather">
            <h2 className="current-weather__condition">{current.condition.text}</h2>
            <h2 className="current-weather__temp">{current.temp.c}°</h2>
            <img className="current-weather__icon" src={current.condition.icon}></img>
        </div>
    )
}