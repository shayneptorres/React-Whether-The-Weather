import React, {Component} from 'react';
import {connect} from "react-redux";
import {Sparklines,SparklinesLine} from "react-sparklines";

class WeatherList extends Component {

    renderWeather(cityData){
        const temps = cityData.list.map(weather => weather.main.temp)
        // const press = cityData.list.main(weather => {weather.main.})
        return(
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Sparklines height = {120} width = {180} data={temps}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
            </tr>
        )
    }


    render () {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temp</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList)