var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are some example locations you could use to try my app!</p>
            <ol>
                <li>
                    <Link to='/?location=Singapore'>Singapore</Link>
                </li>
                <li>
                    <Link to='/?location=Japan'>Tokyo, Japan</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;