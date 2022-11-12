import React ,{useState} from 'react'
import { useEffect } from 'react';
import './Style.css'
import WeatherCard from './WeatherCard';
const Temp = () => {
   const [searchValue,setSearchValue] = useState('bengaluru');
   const [tempInfo, setTempInfo] = useState({})
   const getWeatherInfo = async() =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=5de19500ac90342bb907191faea90851`
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const {temp,humidity,pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const {name} = data;
            const {wind,speed} = data.wind;
            const {country, sunset} = data.sys;
            

            const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            wind,
            country,
            sunset,
            };
            setTempInfo( myNewWeatherInfo)
        }catch(error){
          console.log(error);
        }
   };

   useEffect(()=>{
    getWeatherInfo();
   },[]);
  return (
    <>
        <div className='wrap'>
          <div className='search'>
           <input type='search' placeholder='Search' value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} className='searchTerm'></input>
           <button className='btn' onClick={getWeatherInfo}>Search</button>
          </div>
        </div>
        <WeatherCard tempInfo = {tempInfo}/>
    </>
  )
}

export default Temp