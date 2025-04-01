import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './_components/product-list/product-list.component';
import { ProductCategoryMenuComponent } from './_components/product-category-menu/product-category-menu.component';
import { ProductsDetailsComponent } from './_components/products-details/products-details.component';
import { CartDetailsComponent } from './_components/cart-details/cart-details.component';
import { CheckoutComponent } from './_components/checkout/checkout.component';

export const routes: Routes = [
    {
        path: 'checkout',
        component: CheckoutComponent,
    },
    {
        path: 'cart-details',
        component: CartDetailsComponent,
    },
    {
        path: 'products/:id',
        component: ProductsDetailsComponent,
    },
    {
        path: 'search/:keyword',
        component: ProductListComponent,
    },
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
        path: 'productCategoryMenu',
        component: ProductCategoryMenuComponent,
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
    },

];
