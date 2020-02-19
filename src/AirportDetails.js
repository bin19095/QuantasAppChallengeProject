import React, { Component } from 'react';
/*import axios from 'axios';
import PostData from './PostData/airport.json';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

const URL = 'https://api.qantas.com/flight/refData/airport';

export default class AiportDetails extends Component{
	constructor(props){
		super(props);
	/*	this.state ={
			airportDetails:this.props.val ,
			airportDetailName:this.props.val2
		}*/
	
	}
/*componentDidMount(){
	this.getAirportDetails(this.props.val,this.props.val2)
	console.log('mounted'+this.props.val);
}
componentDidUpdate(prevProps){
	if(this.props.val !== prevProps.val && this.props.val2 !== prevProps.val2){
		this.getAirportDetails(this.props.val)
	}
}
getAirportDetails(id){
 axios.get(URL +`/${id}.json`).then(response =>{
 	this.setState({airportDetails: response
 	}).catch(errors =>{
 		console.log(errors);
 	})
 	})
 };

 getAirportDetails(details,nameDetails){
this.setState({
airportDetails:(this.props.val),
airportDetailName:(this.props.val2)
	});
console.log("printing data"+ this.state.airportDetails);
 }*/

 render(){
 	if(!this.props.val)
 		return(<p>Loading Data
 			</p>)

 	return(<div className="ps-fixed">
 		<div>

 		</div>
 		<div>
 		<p className="color-row"><span className="txt-b">Currency:</span>{this.props.val.regionName}</p>
 		<p><span className="txt-b">TimeZone:</span>{this.props.val2}</p>
 		<p className="color-row"><span className="txt-b">Location:</span></p>
 			<div>
 			<p><span	className="txt-b">Latitude:</span>{this.props.val3.latitude}</p>
	 		<p className="color-row"><span	className="txt-b">Latitude:</span>{this.props.val3.latitude}</p>
	 		<p><span	className="txt-b">Latitude Radius:</span>{this.props.val3.latitudeRadius}</p>
	 		<p className="color-row"><span	className="txt-b">Longitude:</span>{this.props.val3.latitude}</p>
	 		<p><span	className="txt-b">Longitude Radius:</span>{this.props.val3.longitudeRadius}</p>
	 		<p className="color-row"><span	className="txt-b">Latitude Direction:</span>{this.props.val3.latitudeDirection}</p>
	 		<p><span	className="txt-b">LongitudeDirection:</span>{this.props.val3.longitudeDirectin}</p>
	 		<p className="color-row"><span	className="txt-b">Above Sea evel:</span>{this.props.val3.longitude}</p>
	 		</div>
	

 		</div>
 		</div>
 		)
 }
}
