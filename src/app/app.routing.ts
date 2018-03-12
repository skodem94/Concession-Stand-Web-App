import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },{
        path: 'home',
        component: HomeComponent
    },{
        path: 'add',
        component: AddProductComponent
    }
]