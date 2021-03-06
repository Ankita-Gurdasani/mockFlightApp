import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService implements OnInit{

  flightList: Array<any>
  searchFlightList: Array<any>

  constructor() {
    this.flightList = [
      {
        "origin": "LAS",
        "departureTime": "6/29/2014 14:55:00",
        "destination": "LAX",
        "destinationTime": "6/29/2014 16:10:00",
        "price": "$201.00"
      },
      {
        "origin": "MIA",
        "departureTime": "6/17/2014 14:55:00",
        "destination": "ORD",
        "destinationTime": "6/17/2014 17:10:00",
        "price": "$542.00"
      },
      {
        "origin": "LAS",
        "departureTime": "6/29/2014 7:30:00",
        "destination": "YYZ",
        "destinationTime": "6/29/2014 13:58:00",
        "price": "$678.00"
      },
      {
        "origin": "YYZ",
        "departureTime": "6/22/2014 12:00:00",
        "destination": "YYC",
        "destinationTime": "6/22/2014 14:09:00",
        "price": "$630.00"
      },
      {
        "origin": "JFK",
        "departureTime": "6/15/2014 9:30:00",
        "destination": "YEG",
        "destinationTime": "6/15/2014 17:50:00",
        "price": "$730.00"
      },
      {
        "origin": "YYZ",
        "departureTime": "6/13/2014 7:00:00",
        "destination": "YVR",
        "destinationTime": "6/13/2014 9:00:00",
        "price": "$648.00"
      },
      {
        "origin": "MIA",
        "departureTime": "6/22/2014 6:50:00",
        "destination": "ORD",
        "destinationTime": "6/22/2014 9:02:00",
        "price": "$576.00"
      },
      {
        "origin": "YYC",
        "departureTime": "6/23/2014 14:15:00",
        "destination": "YYZ",
        "destinationTime": "6/23/2014 21:59:00",
        "price": "$573.00"
      },
      {
        "origin": "YYZ",
        "departureTime": "6/15/2014 18:00:00",
        "destination": "YVR",
        "destinationTime": "6/15/2014 20:00:00",
        "price": "$698.00"
      },
      {
        "origin": "LAS",
        "departureTime": "6/16/2014 8:11:00",
        "destination": "YYZ",
        "destinationTime": "6/16/2014 19:28:00",
        "price": "$703.00"
      },
      {
        "origin": "LHR",
        "departureTime": "6/27/2014 16:40:00",
        "destination": "BOS",
        "destinationTime": "6/27/2014 18:50:00",
        "price": "$1616.00"
      },
      {
        "origin": "MSY",
        "departureTime": "6/19/2014 14:55:00",
        "destination": "YUL",
        "destinationTime": "6/19/2014 23:24:00",
        "price": "$645.00"
      },
      {
        "origin": "YYZ",
        "departureTime": "6/22/2014 12:00:00",
        "destination": "YYC",
        "destinationTime": "6/22/2014 14:09:00",
        "price": "$630.00"
      },
      {
        "origin": "LAS",
        "departureTime": "6/15/2014 9:54:00",
        "destination": "LAX",
        "destinationTime": "6/15/2014 11:05:00",
        "price": "$286.00"
      },
      {
        "origin": "YYC",
        "departureTime": "6/30/2014 9:30:00",
        "destination": "YYZ",
        "destinationTime": "6/30/2014 17:05:00",
        "price": "$535.00"
      },
      {
        "origin": "JFK",
        "departureTime": "6/21/2014 17:55:00",
        "destination": "YEG",
        "destinationTime": "6/21/2014 23:23:00",
        "price": "$589.00"
      },
      {
        "origin": "LAS",
        "departureTime": "6/22/2014 9:45:00",
        "destination": "YYZ",
        "destinationTime": "6/22/2014 21:20:00",
        "price": "$549.00"
      },
      {
        "origin": "YVR",
        "departureTime": "6/23/2014 9:20:00",
        "destination": "YYZ",
        "destinationTime": "6/23/2014 15:22:00",
        "price": "$1122.00"
      },
      {
        "origin": "MSY",
        "departureTime": "6/19/2014 5:55:00",
        "destination": "YUL",
        "destinationTime": "6/19/2014 10:58:00",
        "price": "$480.00"
      },
      {
        "origin": "YYZ",
        "departureTime": "6/26/2014 12:00:00",
        "destination": "YYC",
        "destinationTime": "6/26/2014 14:09:00",
        "price": "$630.00"
      },
      {
        "origin": "LAX",
        "departureTime": "6/19/2014 11:00:00",
        "destination": "YYC",
        "destinationTime": "6/19/2014 17:45:00",
        "price": "$543.00"
      },
      {
        "origin": "YYC",
        "departureTime": "6/23/2014 12:40:00",
        "destination": "YYZ",
        "destinationTime": "6/23/2014 14:54:00",
        "price": "$541.00"
      },
      {
        "origin": "MIA",
        "departureTime": "6/23/2014 19:40:00",
        "destination": "ORD",
        "destinationTime": "6/23/2014 21:45:00",
        "price": "$532.00"
      },
      {
        "origin": "YVR",
        "departureTime": "6/23/2014 22:10:00",
        "destination": "YYZ",
        "destinationTime": "6/24/2014 2:22:00",
        "price": "$1151.00"
      },
      {
        "origin": "LAS",
        "departureTime": "6/16/2014 8:11:00",
        "destination": "YYZ",
        "destinationTime": "6/16/2014 19:28:00",
        "price": "$703.00"
      },
      {
        "origin": "LAX",
        "departureTime": "6/21/2014 8:55:00",
        "destination": "YYC",
        "destinationTime": "6/21/2014 15:10:00",
        "price": "$577.00"
      },
      {
        "origin": "YYZ",
        "departureTime": "6/15/2014 7:00:00",
        "destination": "YVR",
        "destinationTime": "6/15/2014 9:00:00",
        "price": "$647.00"
      },
      {
        "origin": "LHR",
        "departureTime": "6/19/2014 6:30:00",
        "destination": "BOS",
        "destinationTime": "6/19/2014 12:42:00",
        "price": "$1243.00"
      },
      {
        "origin": "LAS",
        "departureTime": "6/23/2014 13:30:00",
        "destination": "LAX",
        "destinationTime": "6/23/2014 14:40:00",
        "price": "$151.00"
      },
      {
        "origin": "YYZ",
        "departureTime": "6/15/2014 6:45:00",
        "destination": "YYC",
        "destinationTime": "6/15/2014 8:54:00",
        "price": "$578.00"
      },
      {
        "origin": "MIA",
        "departureTime": "6/23/2014 19:40:00",
        "destination": "ORD",
        "destinationTime": "6/23/2014 21:45:00",
        "price": "$532.00"
      },
      {
        "origin": "YYC",
        "departureTime": "6/12/2014 11:00:00",
        "destination": "YVR",
        "destinationTime": "6/12/2014 11:24:00",
        "price": "$379.00"
      },
      {
        "origin": "LHR",
        "departureTime": "6/21/2014 11:05:00",
        "destination": "BOS",
        "destinationTime": "6/21/2014 17:06:00",
        "price": "$975.00"
      },
      {
        "origin": "YVR",
        "departureTime": "6/18/2014 9:10:00",
        "destination": "YYZ",
        "destinationTime": "6/18/2014 19:47:00",
        "price": "$1093.00"
      },
      {
        "origin": "LAX",
        "departureTime": "6/19/2014 8:45:00",
        "destination": "YYC",
        "destinationTime": "6/19/2014 12:45:00",
        "price": "$356.00"
      },
      {
        "origin": "MIA",
        "departureTime": "6/20/2014 7:45:00",
        "destination": "ORD",
        "destinationTime": "6/20/2014 12:36:00",
        "price": "$422.00"
      }
    ]
  }

  ngOnInit(){
    
  }


  getFlightList(origin: String, destination: String){
    if(origin == "" && destination == ""){
      return this.getDuplicateFilteredList(this.getSortedFlightList(this.flightList))
    }else{
      this.searchFlightList = [];

      for(let flight of this.flightList){
        if(flight["origin"] == origin && flight["destination"] == destination){
          this.searchFlightList.push(flight)
        }
      }

      return this.getDuplicateFilteredList(this.getSortedFlightList(this.searchFlightList))
    }
  }


  getSortedFlightList(flightList: Array<any>){
    var sortedArray: Array<any> = flightList.sort((flight1, flight2) => {
      var price1 = flight1.price
      var price2 = flight2.price
      price1 = Number(price1.replace("$", ""))
      price2 = Number(price2.replace("$", ""))

      if(price1 > price2) {
          return 1
      }else if (price1 < price2) {
          return -1
      }else{
        var departureTime1 = flight1.departureTime
        var departureTime2 = flight2.departureTime

        if(departureTime1 > departureTime2){
          return 1
        }else if(departureTime1 < departureTime2){
          return -1
        }else{
          return 0
        }
      }
    })

    return sortedArray
  }


  getDuplicateFilteredList(flightList: Array<any>){
    if(flightList.length > 0){
      var uniqueFlightList = []
      uniqueFlightList.push(flightList[0])

      for(let currentFlight of flightList){
        var lastFlight = uniqueFlightList[uniqueFlightList.length - 1]

        if(lastFlight.origin == currentFlight.origin && 
          lastFlight.departureTime == currentFlight.departureTime && 
          lastFlight.destination == currentFlight.destination && 
          lastFlight.destinationTime == currentFlight.destinationTime &&
          lastFlight.price == currentFlight.price){
          continue
        }else{
          uniqueFlightList.push(currentFlight)
        }  
      }

      return uniqueFlightList
    }else{
      return flightList
    }
  }


  getOriginList(){
    var originList = []

    for(let flight of this.flightList){
      if(originList.indexOf(flight.origin) == -1){
        originList.push(flight.origin)
      }
    }

    return originList
  }


  getDestinationList(){
    var destinationList = []

    for(let flight of this.flightList){
      if(destinationList.indexOf(flight.destination) == -1){
        destinationList.push(flight.destination)
      }
    }

    return destinationList
  }
}
