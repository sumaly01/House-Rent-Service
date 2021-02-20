import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Property } from '../../models/property.model'
import { PropertyService } from '../services/property-services';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  property: Property;
  files: File[] = [];
  states = ['Provience no 1', 'Provience no 2', 'Bagmati Provience', 'Gandaki Provience', 'Lumbini Provience', 'Karnali Provience', 'Sudurpashchim']
  constructor(private propertyService: PropertyService, private toastr: ToastrService, private router: Router) {
    this.property = new Property()
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.files)
    console.log(this.property)
    this.propertyService.uploadProperty(this.property, this.files, 'POST').subscribe((response: any) => {
      console.log(response)
      this.toastr.success('The property has been added successfully')
      this.router.navigate(['myListing'])

    }, err => {
      console.log(err)
      this.toastr.error('Property adding failed')
    })

  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
