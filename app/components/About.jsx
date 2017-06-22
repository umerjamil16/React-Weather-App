var React = require("react");
var ReactDOM = require("react-dom");

//Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();
// var About = React.createClass({
//     render: function(){
//         return (
//             <div>
//             <h4>About Component</h4>
//             </div>
//         );
//     }
// });
// <div>
//   <h1 className="text-centered">Examples
//   </h1>
//   <p>Here are few examples locations to try out:
//   </p>
//   <ol>
//     <li>
//       <Link to="/?location=Islamabad">Islamabad, Pakistan</Link>
//     </li>
//     <li>
//       <p>asdsa</p>
//     </li>
//     <li>
//       <Link to="/?location=Florianópolis">Florianópolis, Brazil</Link>
//     </li>
//   </ol>
// </div>

var About = (props) => {
  return (
    <div >
      <h1 className="text-center">About</h1>
      <p className="text-center">This app is developed by
        <a  href="https://github.com/umerjamil16">@umerjamil16</a>
         using React</p>

      <p className="text-center">
        <a href="https://github.com/umerjamil16/React-Weather-App">Click here to access the source code</a>
      </p>
    </div>

  );
}

module.exports = About;
