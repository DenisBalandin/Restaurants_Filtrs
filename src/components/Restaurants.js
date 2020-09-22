import React, { Component } from 'react';
import SortData from './SortData';
import StateFiltr from './StateFiltr';
import GenreFiltr from './GenreFiltr';
import SearchFiltr from './SearchFiltr';

class Restaurants extends Component{
    constructor(props){
        super(props);
        this.state = {
           baseData:[],
           fixedData:[],
           sorting:false,
           value: '',
           stateEmpty:false,
           countPage:0,
           firstItem:0,
           lastItem:10,
        };
    }
    componentDidMount = () => {
        fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
            method: 'GET',
            headers: {
                'Authorization':'Api-Key q3MNxtfep8Gt',
            },
        }).then(res=>res.json())
            .then(data => {
            this.setState({ baseData: data, fixedData:data })
        });
    }
    SortDataUpdate(sort){
        this.setState({fixedData:sort,stateEmpty:false});
    }
    StateFiltrUpdate(sort,empty){
        this.setState({fixedData:sort,stateEmpty:empty, countPage:0,firstItem:0,lastItem:10,});
    }
    GenreFiltrUpdate(sort){
        this.setState({fixedData:sort,stateEmpty:false, countPage:0,firstItem:0,lastItem:10,});
    }
    SearchFiltrUpdate(sort){
        this.setState({fixedData:sort,stateEmpty:false, countPage:0,firstItem:0,lastItem:10,});
    }
    pagination = (n) =>{
        let lastItem = n * 10;
        this.setState({ firstItem: lastItem - 10, lastItem:lastItem })
    }
    render(){
        var SortDataUpdate = this.SortDataUpdate;
        var StateFiltrUpdate = this.StateFiltrUpdate;
        var GenreFiltrUpdate = this.GenreFiltrUpdate;
        var SearchFiltrUpdate = this.SearchFiltrUpdate;
        const pagination = [];
        for (let i =1; i <= Math.ceil(this.state.fixedData.length / 10); i++) {
            let numPage = this.state.fixedData.length / 10;
            if(this.state.fixedData.length > 10){
                pagination.push(<div key={i} className={i === numPage ? "pageNum paginationColor":"pageNum"} onClick={this.pagination.bind(this,i)}>{i}</div>);
            }
        }
        return(
            <div>
                <div id="NavBar">
                    <div className="menuhome">
                        <SortData baseData={this.state.baseData} SortDataUpdate = {SortDataUpdate.bind(this)} />
                        <StateFiltr baseData={this.state.baseData} StateFiltrUpdate = {StateFiltrUpdate.bind(this)} />
                        <GenreFiltr baseData={this.state.baseData} GenreFiltrUpdate = {GenreFiltrUpdate.bind(this)} />
                        <SearchFiltr fixedData={this.state.fixedData} baseData={this.state.baseData} SearchFiltrUpdate = {SearchFiltrUpdate.bind(this)} />
                    </div>
                </div>
                <h1>Restaurants</h1>
                {this.state.stateEmpty? <h2>No restaurants were found for that state</h2>:""}
                <div className="allUsers">
                    {this.state.fixedData.slice(this.state.firstItem,this.state.lastItem).map((item) =>
                        <div className="UserIten" key={item.id}>
                            <div className="userData">
                                <p>Name: {item.name}</p>
                                <p>City: {item.city}</p>
                                <p>State: {item.state}</p>
                                <p>Phone: {item.telephone}</p>
                                <p>Genre: {item.genre}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pagination">
                    {pagination}
                </div> 
            </div>
        )
    }
}

export default Restaurants;