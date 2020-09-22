import React, { Component } from 'react';

class StateFiltr extends Component{
    constructor(props){
        super(props);
        this.state = {
            fixedData:[],
            stateArray:['All','AL','MD','CO','VA','TX'],
            sorting:false,
            value: '',
            empty:false
         };
        this.stateFilter = this.stateFilter.bind(this);
    }
    stateFilter = (event) => {
        if(event.target.value !== "All"){
            let stateFiltr = this.props.baseData.filter(item => item.state == event.target.value );
            if(stateFiltr.length === 0 ){
                this.setState({empty:true });
            }else{
                this.setState({empty:false });
            }
            this.setState({fixedData:stateFiltr });
            console.log();
        }else{
            this.setState({fixedData: this.props.baseData});
        }
        this.setState({value: event.target.value, sorting:true});
    }
    render() {
        var StateFiltrUpdate = this.props.StateFiltrUpdate;
        return (
            <div className="statepagefiltr">
                <p>State</p>
                <select className="stateFiltr" value={this.state.value} type="text" onChange={this.stateFilter} onClick={this.state.sorting? () => StateFiltrUpdate(this.state.fixedData,this.state.empty):this.stateFilter }>
                    {this.state.stateArray.map((item) => 
                        <option key={item} value={item}>{item}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default StateFiltr;