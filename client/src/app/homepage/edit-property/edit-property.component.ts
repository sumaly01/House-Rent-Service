import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Property } from "../../models/property.model";
import { PropertyService } from "../services/property-services";
import { MouseEvent } from "@agm/core";

@Component({
  selector: "app-edit-property",
  templateUrl: "./edit-property.component.html",
  styleUrls: ["./edit-property.component.scss"],
})
export class EditPropertyComponent implements OnInit {
  propertyId: string;
  property;
  Url = "http://localhost:4040/";
  images;

  files: File[] = [];
  zoom: number = 8;

  lat: number = 27.7172;
  lng: number = 85.324;
  marker: any = {};

  mapClicked($event: MouseEvent) {
    this.marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    };
    console.log(this.marker);
  }

  states = [
    "Province no 1",
    "Province no 2",
    "Bagmati Province",
    "Gandaki Province",
    "Lumbini Province",
    "Karnali Province",
    "Sudurpashchim",
  ];
  constructor(
    private propertyService: PropertyService,
    private toastr: ToastrService,
    private router: Router,
    public activeRouter: ActivatedRoute
  ) {
    this.propertyId = this.activeRouter.snapshot.params["id"];
    this.property = {};
  }

  ngOnInit() {
    this.propertyService
      .getPropertyById(this.propertyId)
      .subscribe((response: any) => {
        this.property = response.data;
        this.images = this.property.images;

        if (this.property.waterSupply == "Available") {
          this.property.waterSupply = true;
        } else {
          this.property.waterSupply = false;
        }

        if (this.property.parking == "Available") {
          this.property.parking = true;
        } else {
          this.property.parking = false;
        }
        console.log(response.data);
      });
  }

  submit() {
    console.log(this.files);
    if (this.marker.lat && this.marker.lng) {
      this.property.lat = this.marker.lat;
      this.property.lng = this.marker.lng;
    }

    // console.log(this.property)

    this.propertyService
      .uploadProperty(this.property, this.files, "PATCH")
      .subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success("The property has been edited successfully");
          this.router.navigate(["myListing"]);
        },
        (err) => {
          console.log(err);
          this.toastr.error("Property adding failed");
        }
      );
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
