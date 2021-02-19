import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomepageRoutingModule } from './homepage-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    FooterComponent, ExploreComponent,
    FavouritesComponent,
    MyListingsComponent,
    AddPropertyComponent,
    ViewPropertyComponent
  ]
  ,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HomepageRoutingModule,
    NgxDropzoneModule
  ]
})
export class HomepageModule { }
