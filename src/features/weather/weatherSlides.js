import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    method: 'GET',
    url: process.env.REACT_APP_URL,
    params: {q: 'q=caborca'},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_MY_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_MY_HOST
    }
};

export const weatherSlides = createSlice({
    name: "weather",
    initialState: {
        current:{},
        details:{},
        error:{
            message:""
        }
    },
    reducers: {
        setWeather: (state, action)=>{
            state.current = {
                temp:{
                    c: action.payload.current.temp_c,  
                    f: action.payload.current.temp_f
                },
                condition : action.payload.current.condition,
            }
            state.details = {
                location: action.payload.location,
                weatherDetails: {
                    wind:{
                        dir: action.payload.current.wind_dir,
                        velocity: {
                            mph: action.payload.current.wind_mph,
                            kph: action.payload.current.wind_kph
                        }
                    },
                    cloud: action.payload.current.cloud,
                    humidity: action.payload.current.humidity,
                }
            }
            state.error.message = "";
        },
        setCity: (state, action)=>{
            options.params.q = "q="+action.payload;
        },
        setErrorMessage:(state, action)=>{
            state.error.message = action.payload
        }
    }
});

export const {setWeather, setCity, setErrorMessage} = weatherSlides.actions;

export default weatherSlides.reducer

export const fetchWeather = ()=> (dispatch)=>{
    axios.request(options).then(response=>{
        dispatch(setWeather(response.data))
    }).catch(e=>{
        dispatch(setErrorMessage("Ha habido un error.\n por favor intenta con otro nombre"))
    })
}