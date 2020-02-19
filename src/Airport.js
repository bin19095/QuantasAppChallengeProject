import React, { Component } from 'react';
import AirportDetails from './AirportDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostData from './PostData/airport.json';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Container, Row, Col} from 'reactstrap';
import './App.css';
import Header from './Header';

const URL = 'https://api.qantas.com/flight/refData/airport';

export default class Airport extends Component {

constructor(props){
  super(props)
  this.state={
    sltAirportCurrency: [],
    sltAirportTimeZ:[],
    sltAirportLoc:[],
    isshowed:true

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
  const details = Object.assign([], this.state.airportList);
      console.log("not reading ",details);
}

render(){
  if(!this.state.airportList)
    return(<p>Loading Data</p>)

  return(
    <div className="container">
    <Header />
    <div className="col-md-4 float-left scroll">
    {this.state.airportList.data.map((airports,index) =>
      <div key={airports.airportCode}>
      <div className=" alert alert-primary grouped" role="alert">

       <p>
       <span className="txt-b">
       Airport Name:
       </span>
       {airports.airportName}
       </p>

        <p>
        <span className="txt-b">
        Country:
        </span>
        {airports.country.countryName}
        </p>

      <Button className="b-margin-bot grouped2" variant="info"  onClick={() => this.setState({
        sltAirportCurrency:airports.region, 
        sltAirportTimeZ:airports.city.cityName,
        sltAirportLoc:airports.location})}>
           click to view AirportDetails
      </Button>
      </div>
      </div>)
    }
    </div>
    

    <div className="col-md-5 float-left">
      <AirportDetails val={this.state.sltAirportCurrency} val2={this.state.sltAirportTimeZ} val3={this.state.sltAirportLoc} />
    </div>
    </div>
    )
   
}
}