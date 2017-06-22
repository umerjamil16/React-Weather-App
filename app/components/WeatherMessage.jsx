var React = require("react");
var ReactDOM = require("react-dom");

// var WeatherMessage = React.createClass({
//     render: function(){
//         var {temp, location} = this.props;

//         return (
//             <div>
//             <h3>Its {temp} in {location}</h3>
//             </div>
//         );
//     }
// });

var WeatherMessage = (props)=>{
    return (
            <div>
            <h3 className="text-center">Its {props.temp} in {props.location}</h3>
            </div>
        );
}
module.exports = WeatherMessage;
