var React = require("react");
var ReactDOM = require("react-dom");

// var About = React.createClass({
//     render: function(){
//         return (
//             <div>
//             <h4>About Component</h4>
//             </div>
//         );
//     }
// });


var About = (props) =>{
    return(
        <div>
        <h3>About </h3>
        <p>Welcome to the About page</p>
        </div>

    );
}

module.exports = About;