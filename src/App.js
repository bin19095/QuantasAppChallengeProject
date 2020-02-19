import React, { Component } from 'react';
import AirportDetails from './AirportDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';


const URL = 'https://api.qantas.com/flight/refData/airport';

export default class Airport extends Component {

constructor(props){
  super(props)
  this.state={
    selectedAirport: 0
  }

}
componentDidMount(){
  this.getAirportData();

}

getAirportData(){
  axios.get(URL).then(response => {
    this.setState({
      airportList: response
    })
  }).catch(errors =>{
    console.log(errors);
  })
}
render(){
  if(!this.state.airportList)
    return(<p>Loading Data</p>)
  return(<div className="container">
    <div>
    {this.state.airportList.data.map((airports,index) =><div key={index}>
      <div>
       <p> {index}<br/>{airports.airportCode}</p>
        <p>{airports.airportName}</p>
      <button onClick={() => this.setState({selectedAirport:{index} })}>
      click to view AirportDetails
      </button>
      </div>


      </div>)

    }
    </div>
    <div>
      <AirportDetails val={this.state.selectedAiport} />
    </div>
    </div>
    )
}
}