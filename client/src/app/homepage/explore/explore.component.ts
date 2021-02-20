import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property-services';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  allProperties: [object]
  Url = "http://localhost:4040/"
  p: number = 1;
  
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getProperty().subscribe((response: any) => {
      this.allProperties = response.data
      console.log(this.allProperties)
    }, err => {
      console.log(err)
    })
  }

}
