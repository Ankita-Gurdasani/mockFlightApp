import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})

export class FlightListComponent implements OnInit {

  flightList: Array<any>
  originList: Array<string>
  destinationList: Array<string>
  origin: string
  destination: string
  errorMessage: string

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.origin = this.activatedRoute.url["_value"]["1"]["path"]
    this.destination = this.activatedRoute.url["_value"]["2"]["path"]

    this.originList = this.dataService.getOriginList()
    this.destinationList = this.dataService.getDestinationList()

    this.errorMessage = ""

    this.getFlightList(this.origin, this.destination)
  }


  getFlightList(origin: String, destination: String){
    this.flightList  = this.dataService.getFlightList(origin, destination)

    if(this.flightList.length == 0){
      this.errorMessage = "No flights to display from " + origin + " --> " + destination
    }else{
      this.errorMessage = ""
    }
  }


  searchFlights(){
    this.getFlightList(this.origin, this.destination)
  }


  resetSearch(){
    this.getFlightList("", "")
    this.origin = ""
    this.destination = ""
  }
}
