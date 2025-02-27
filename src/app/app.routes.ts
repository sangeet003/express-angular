import { Routes } from '@angular/router';
import { ListingComponent } from './pages/listing/listing.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: ListingComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: ':id',
        component: DetailComponent
    }
];
