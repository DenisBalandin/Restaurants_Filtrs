import React, { Component } from 'react';

class SortData extends Component{
    constructor(props){
        super(props);
        this.state = {
            sorted:[]
        }
    }
    sortData = () => {
        const sorted = this.props.baseData.sort(function(a, b){
            if(a.name < b.name ) { return -1; }
            if(a.name > b.name) { return 1; } 
            return 0;
        });
        //this.setState({value: event.target.value, sorting:true});
        var SortDataUpdate = this.props.SortDataUpdate;
        SortDataUpdate(sorted)
    }
    render() {
        return (
            <div>
                <div className="sortname" onClick={this.sortData}>
                    Sort by name
                </div>
            </div>
        )
    }
}

export default SortData;