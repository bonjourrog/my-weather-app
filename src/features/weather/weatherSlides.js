import { createSlice } from "@reduxjs/toolkit";
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
        data:{
            current:{},
            details:{},
            error:{
                message:""
            }
        },
        loading: true
    },
    reducers: {
        setWeather: (state, action)=>{
            state.data.current = {
                temp:{
                    c: action.payload.current.temp_c,  
                    f: action.payload.current.temp_f
                },
                condition : action.payload.current.condition,
            }
            state.data.details = {
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
            state.data.error.message = ""
            state.loading = false
        },
        setCity: (state, action)=>{
            options.params.q = "q="+action.payload;
        },
        setErrorMessage:(state, action)=>{
            state.error.message = action.payload
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        }
    }
});

export const {setWeather, setCity, setErrorMessage, setLoading} = weatherSlides.actions;

export default weatherSlides.reducer

export const fetchWeather = ()=> (dispatch)=>{
    axios.request(options).then(response=>{
        dispatch(setWeather(response.data))
    }).catch(e=>{
        dispatch(setErrorMessage("Ha habido un error.\n por favor intenta con otro nombre"))
    });
}