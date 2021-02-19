import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property.model'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  property: Property;
  files: File[] = [];
  states = ['Provience no 1', 'Provience no 2', 'Bagmati Provience', 'Gandaki Provience', 'Lumbini Provience', 'Karnali Provience', 'Sudurpashchim']
  constructor() {
    this.property = new Property()
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.files)
    console.log(this.property)
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
