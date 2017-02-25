import React, {Component} from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { fetchWeather } from "../actions/index"

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ""}
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // go and fetch weather data
    onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term:""})
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term:event.target.value})
    }

    render () {
        return (
            <div>
                <form
                    onSubmit={this.onFormSubmit} 
                    className="input-group">
                    <input 
                        placeholder="Search for the weather in any city"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-default">Search</button>
                    </span>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);