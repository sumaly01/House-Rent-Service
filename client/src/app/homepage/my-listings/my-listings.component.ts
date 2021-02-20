import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property-services';


@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.scss']
})
export class MyListingsComponent implements OnInit {
  myPropertyList;
  path;
  Url = "http://localhost:4040/"

  constructor(private propertyService: PropertyService) {
    this.myPropertyList = []

  }

  ngOnInit() {
    this.propertyService.getPropertyByUser().subscribe((response: any) => {
      this.myPropertyList = response.data
      // this.path = this.Url + this.myPropertyList.images[0]
      // console.log(this.path)


      console.log(this.myPropertyList)
    }, err => {
      console.log(err)
    })
  }
}
