import React, { Component } from 'react';

class SearchFiltr extends Component{
    constructor(props){
        super(props);
        this.state = {
            fixedData:[],
            sorting:false,
            value: '',
            usefiltr: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'usefiltr' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    searchHandle = () => {
        let searchCity = this.props.baseData.filter(item => item.city.includes(this.state.value));
        let searchName = this.props.baseData.filter(item => item.name.includes(this.state.value));
        let searchGenre = this.props.baseData.filter(item => item.genre.includes(this.state.value));
        if(this.state.usefiltr){
             searchCity = this.props.fixedData.filter(item => item.city.includes(this.state.value));
             searchName = this.props.fixedData.filter(item => item.name.includes(this.state.value));
             searchGenre = this.props.fixedData.filter(item => item.genre.includes(this.state.value));
        }

        const result_array = searchCity.concat(searchName,searchGenre);
        console.log(result_array);
        this.setState({fixedData:result_array,sorting:true});
        var SearchFiltrUpdate = this.props.SearchFiltrUpdate;
        SearchFiltrUpdate(result_array)
    }
    searchChange = (event) => {
        this.setState({value: event.target.value});
    }
    render() {
        var SearchFiltrUpdate = this.props.SearchFiltrUpdate;
        return (
            <div className="statepagefiltr">
                <p>Search</p>
                <input className="searchFiltr" type="text" value={this.state.value} onChange={this.searchChange} />
                <div className="searchButton" onClick={this.state.value !== "" ? this.searchHandle:() => SearchFiltrUpdate(this.props.baseData)}>ok</div>
                <p className="usefiltr">Use filtr</p>
                <input className="useFiltrcheckbox" name="usefiltr" type="checkbox" checked={this.state.usefiltr} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default SearchFiltr;