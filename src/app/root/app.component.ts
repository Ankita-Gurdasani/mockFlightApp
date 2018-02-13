import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  flightList: Array<any>
  originList: Array<string>
  destinationList: Array<string>
  origin: string
  destination: string
  errorMessage: string

  constructor(private dataService: DataService){
  }

  ngOnInit(){
    this.getFlightList("", "")

    this.originList = this.dataService.getOriginList()
    this.destinationList = this.dataService.getDestinationList()

    this.errorMessage = ""
  }


  getFlightList(origin: String, destination: String){
    this.flightList  = this.dataService.getFlightList(origin, destination)
    console.log(this.flightList.length)
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
