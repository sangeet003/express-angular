import { Routes } from '@angular/router';
import { ListingComponent } from './pages/listing/listing.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: ListingComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];
