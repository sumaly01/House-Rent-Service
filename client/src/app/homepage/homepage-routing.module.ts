import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomepageComponent } from './homepage.component';
import { MyListingsComponent } from './my-listings/my-listings.component';


const homepageRoutes: Routes = [

    {
        path: '',
        component: HomepageComponent
    },

    {
        path: 'explore',
        component: ExploreComponent
    },

    {
        path: 'myListing',
        component: MyListingsComponent
    },
    {
        path: 'favourites',
        component: FavouritesComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(homepageRoutes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule { }
