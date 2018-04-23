var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
        <p>It is {temp}C in {location}.</p>
    );
}

module.exports = WeatherMessage;