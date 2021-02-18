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



@NgModule({
  declarations: [HomepageComponent, NavbarComponent, FooterComponent, ExploreComponent, FavouritesComponent, MyListingsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
