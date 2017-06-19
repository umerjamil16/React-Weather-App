var React = require("react");
var ReactDOM = require("react-dom");
var {Link, IndexLink} = require("react-router");

// var Nav = React.createClass({
//     render: function(){
//         return (
//             <div>
//             <h3>Nav Component</h3>

//             <IndexLink to = "/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
//             <IndexLink to = "/about" activeClassName="active"  activeStyle={{fontWeight: "bold"}}>About</IndexLink>
//             <IndexLink to = "/examples" activeClassName="active"  activeStyle={{fontWeight: "bold"}}>Examples</IndexLink>
    
//             </div>
//         );
//     }
// });

var Nav = (props)=>{
    return(
            <div>
            <h3>Nav Component</h3>

            <IndexLink to = "/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
            <IndexLink to = "/about" activeClassName="active"  activeStyle={{fontWeight: "bold"}}>About</IndexLink>
            <IndexLink to = "/examples" activeClassName="active"  activeStyle={{fontWeight: "bold"}}>Examples</IndexLink>
    
            </div>
        );    
}

module.exports = Nav;