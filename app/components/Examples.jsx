var React = require("react");
var ReactDOM = require("react-dom");

// var Examples = React.createClass({
//     render: function(){
//         return (
//             <div>
//             <h4>Examples Component</h4>
//             </div>
//         );
//     }
// });

var Examples = (props) => {
    return (
            <div>
            <h4>Examples </h4>
            <p>Welcome to Example page </p>
            </div>
        );
};
module.exports = Examples;