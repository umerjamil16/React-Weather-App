var React = require("react");
var ReactDOM = require("react-dom");
var WeatherForm = require("WeatherForm");
var OpenWeatherMap = require("OpenWeatherMap");
var WeatherMessage = require("WeatherMessage");

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var that = this;

        // debugger;
        this.setState({
            isLoading: true,
        });
        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(error){
            that.setState({
                isLoading: false
            });
            alert(error);
        });
    },
    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching Weather..</h3>
            }else if(temp && location){
                 return <WeatherMessage temp={temp} location = {location}/>;
            }
        }

        return (
            <div>
            <h4>Weather Component</h4>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;