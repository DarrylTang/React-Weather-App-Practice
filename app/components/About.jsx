var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return(
//             <h3>About component</h3>
//         );
//     }
// });

var About = (props) =>{
    return(
        <div>
            <h3>About</h3>
            <p>
                This application takes a city name and makes a request to the Open Weather API
                which is then formatted and displayed to you. 
            </p>
            <p>
                I made this application alongside with an online course in order to learn React.js
                and other miscs know hows.
            </p>
        </div>
    )
};

module.exports = About;