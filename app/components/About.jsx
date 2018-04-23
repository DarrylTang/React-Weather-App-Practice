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
            <h1 className="text-center">About</h1>
            <p>
                This application takes a city name and makes a request to the Open Weather API
                which is then formatted and displayed to you. 
            </p>
            <p>
                I made this application alongside with an online course in order to learn React.js
                and other miscs know hows.
            </p>
            <h2>Links below:</h2>
            <ul>
                <li><a href="https://github.com/DarrylTang/React-Weather-App-Practice">Github</a></li>
                <li><a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content">Online Course</a></li>
            </ul>
        </div>
    )
};

module.exports = About;