import React from "react";



const Forecast = (weather) => {
    const dateTime = weather.item[0].split("T");
    return (
        <div>
            <div class="container">
                <div class="row">
                    {dateTime[1]}: {weather.item[1]} F
                </div>
            </div>
        </div>
    );

    
}

export default Forecast;