import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../services/property-services';


@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.scss']
})
export class MyListingsComponent implements OnInit {
  myPropertyList;
  path;
  Url = "http://192.168.1.68:4040/"
  isData: boolean

  constructor(private propertyService: PropertyService, private router: Router) {
    this.myPropertyList = []

  }

  open(id) {
    this.router.navigateByUrl(`/property/${id}`)
  }

  ngOnInit() {
    this.propertyService.getPropertyByUser().subscribe((response: any) => {
      this.myPropertyList = response.data
      console.log(response.data)

      if (this.myPropertyList.length == 0) {
        console.log("empty")
        this.isData = false
      }
      else {
        this.isData = true
      }



    }, err => {
      console.log(err)
    })
  }
}
