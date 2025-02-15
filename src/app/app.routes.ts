import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './_components/product-list/product-list.component';

export const routes: Routes = [
    {
        path: 'category/:id',
        component: ProductListComponent,
    },
    {
        path: 'category',
        component: ProductListComponent,
    },
    {
        path: 'products',
        component: ProductListComponent,
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: '**',// this is generic wildcard. it will match on anything that did'nt match above routes:
        redirectTo: '/products',
        pathMatch: 'full'
    }
];
