import React, { useState } from 'react';

const WeatherList = () => {





    return (
        <div>
            {/* {songs.map(item => (
                <SongDisplay key={item.id} item={item}/>
            ))} */}
        </div>
    );
}

export const displayWeather = async (name) => {
    const res = await getCity(name);
    return
} 

const getCity = async (name) => {
    console.log({name}.name);
    console.log('https://geocoding-api.open-meteo.com/v1/search?name=' + {name}.name);
    try {
        const res = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + {name}.name);
        const results = await res.json();
        console.log(results.results[0]);
        if (results.results && results.results.length > 0) {
            const result = results.results[0];
            console.log({result}.result);
            fetch('https://geocoding-api.open-meteo.com/v1/forecast?latitude=' + {result}.result.latitude + '&longitude=' + {result}.result.longitude + '&temperature_unit=fahrenheit&timezone=CST&daily=sunset', {mode: 'no-cors'})
                .then(response => {
                    const weather = response.json();
  })
            

            
            
            
            
            return 



        } else {
            alert("Could not find city " + {name}.name);
            return null;
        }
    } catch (error) {
        console.log({error});
        alert("Error in finding city " + {name}.name);
    }
}