import React, { Component } from 'react';

class GenreFiltr extends Component{
    constructor(props){
        super(props);
        this.state = {
            fixedData:[],
            stateArray:['All','American','Seafood','International','Asian','Cafe'],
            sorting:false,
            value: ''
         };
        this.genreFilter = this.genreFilter.bind(this);
    }
    genreFilter = (event) => {
        if(event.target.value !== "All"){
            let genreFilter = this.props.baseData.filter(item => item.genre.includes(event.target.value));
            this.setState({fixedData:genreFilter });
        }else{
            this.setState({fixedData: this.props.baseData});
        }
        this.setState({value: event.target.value, sorting:true});
    }
    render() {
        var GenreFiltrUpdate = this.props.GenreFiltrUpdate;
        return (
            <div className="statepagefiltr">
                <p>Genre</p>
                <select className="stateFiltr" value={this.state.value} type="text" onChange={this.genreFilter} onClick={this.state.sorting? () => GenreFiltrUpdate(this.state.fixedData):this.genreFilter }>
                    {this.state.stateArray.map((item) => 
                        <option key={item} value={item}>{item}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default GenreFiltr;