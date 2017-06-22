var React = require("react");
var ReactDOM = require("react-dom");
var {Link} = require("react-router");

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
      <h1 className="text-centered">Examples
      </h1>
      <p>Here are few examples locations to try out:
      </p>
      <ol>
        <li>
          <Link to="/?location=Islamabad">Islamabad, Pakistan</Link>
        </li>
        <li>
          <p>asdsa</p>
        </li>
        <li>
          <Link to="/?location=Florianópolis">Florianópolis, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};
module.exports = Examples;
