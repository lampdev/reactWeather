var Widget = React.createClass({

    getInitialState: function() {
        return {
            location: null,
            weather: null
        }
    },

    componentDidMount: function() {
        this.getLocation();
    },
    
    getWeather(){
        $.ajax({
            url: '/weather/'+this.state.location,
            success: function (data) {
                this.setState({weather: data});
                // console.log(this.state.weather);
            }.bind(this)
        });
    },


    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCity);
        }else {
            this.setState({location: 'Kremenchuk'});
        }
    },

    getCity(position) {
        // console.log(position);
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var language = "en";
        var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=true&language="+language;
        $.ajax({
            type: 'GET',
            url: url,
            success: function(data){
                this.setState({location: data.results[0].address_components[3].long_name});
            }.bind(this)
        });
    },


    handleLocation(event){
        this.setState({location: event.target.value});
    },

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading zag">Weather of {this.state.location}</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="col-md-12">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" onChange={this.handleLocation.bind(this)} value={this.state.location} className="form-control ww" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" onClick={this.getLocation} className="btn btn-default ww">Get location</button>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" onClick={this.getWeather.bind(this)} className="btn btn-default ww">Get weather</button>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
                <Weather weather={this.state.weather} />
            </div>
    );
    }
});

var Weather = React.createClass({
    render: function() {
        var weather = this.props.weather;

        if(weather){
            return(
                <div className="col-md-8 col-md-offset-2 alert alert-info">
                    <div className="zag">
                        {weather.description}
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-10 pull-left">
                            Temperature:
                        </div>
                        <div className="col-md-2 pull-right">
                            {weather.temp} F&#176;
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="col-md-10 pull-left">
                            Wind speed:
                        </div>
                        <div className="col-md-2 pull-right">
                            {weather.wind} mph
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="col-md-10 pull-left">
                            Humidity:
                        </div>
                        <div className="col-md-2 pull-right">
                            {weather.humidity} %
                        </div>
                    </div>

                    <div className="zag">
                        {weather.key_word}
                    </div>


                </div>

            );
        }else{
            return(
                <div>
                </div>
            );
        }

    }
});

window.Widget = Widget;
