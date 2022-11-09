import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setCity } from '../../../../features/weather/weatherSlides';


export const SearchBox = ()=>{
    
    const {data:{details:{location:{name}}}} = useSelector(state=> state.weather);

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useState('');

    const handleSearchBox = (e)=>{
        setLocation(e.target.value);
    }

    const handleSubmit = (event)=>{
        if(event.target.nextElementSibling.classList.contains("search-box__icon--search-activate") && location !== name){
            dispatch(setCity(location));
            dispatch(fetchWeather());
        }
        event.preventDefault();
    }
    
    const toggleSearchBox = (event, value)=>{
        setIsOpen(value);
        if(value === false){
            setLocation('');
        }
        
        if(event.target.classList.contains("search-box__icon--search-activate") && location !== name){
            dispatch(setCity(location));
            dispatch(fetchWeather());
        }
    }

    return (
        <div className='search-box'>
            <form onSubmit={(event)=>handleSubmit(event)} className={`search-box__form ${isOpen ? 'search-box__form--show' : 'search-box__form--hide' }`}>
                <input value={location} onChange={(e)=>handleSearchBox(e)} className="search-box__form-input" type="text" placeholder="¿Qué cuidad busca?" />
                </form>

                <FontAwesomeIcon onClick={(e)=>toggleSearchBox(e, true)} className={`search-box__icon ${isOpen ? 'search-box__icon--search-activate' : 'search-box__icon--search'}`} icon={faMagnifyingGlass} />
                
                <FontAwesomeIcon onClick={(e)=>toggleSearchBox(e,false)} className={`search-box__icon search-box__icon--close ${isOpen ? 'search-box__icon--close-activate' : 'search-box__icon--close-deactivate'}`} icon={faXmark} />
        </div>
    )
}