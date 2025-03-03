import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './_components/product-list/product-list.component';
import { ProductCategoryMenuComponent } from './_components/product-category-menu/product-category-menu.component';
import { ProductsDetailsComponent } from './_components/products-details/products-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailsComponent } from './_components/cart-details/cart-details.component';
import { AddEmployeeComponent } from './BasicProject/_component/add-employee/add-employee.component';
import { DataBindingComponent } from './BasicProject/_component/data-binding/data-binding.component';
import { EmployeeListComponent } from './BasicProject/_component/employee-list/employee-list.component';
import { StructuralDirComponent } from './BasicProject/_component/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './BasicProject/_component/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './BasicProject/_component/controlFlow/if-else/if-else.component';
import { ForComponent } from './BasicProject/_component/controlFlow/for/for.component';
import { PipeComponent } from './BasicProject/_component/pipe/pipe.component';
import { TemplateComponent } from './BasicProject/_component/forms/template/template.component';
import { ReactiveComponent } from './BasicProject/_component/forms/reactive/reactive.component';
import { GetApiComponent } from './BasicProject/_component/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './BasicProject/_component/apiIntegration/post-api/post-api.component';
import { PutApiComponent } from './BasicProject/_component/apiIntegration/put-api/put-api.component';
import { DeleteApiComponent } from './BasicProject/_component/apiIntegration/delete-api/delete-api.component';
import { LifecycleEventComponent } from './BasicProject/_component/lifecycle-event/lifecycle-event.component';
import { NgtemplateComponent } from './BasicProject/_component/directive/ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './BasicProject/_component/directive/ngcontainer/ngcontainer.component';
import { ViewchildComponent } from './BasicProject/_component/decoratorss/viewchild/viewchild.component';
import { LayoutComponent } from './BasicProject/_component/layout/layout.component';
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


    // ------------------------------------Basic Project--------------------------------------------------------
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {
                path: 'add-emp',
                component: AddEmployeeComponent,
            },
            {
                path: 'data-bin',
                component: DataBindingComponent,
            },
            {
                path: 'employee-list',
                component: EmployeeListComponent,
            },
            {
                path: 'structural-dir',
                component: StructuralDirComponent,
            },
            {
                path: 'attribute-dir',
                component: AttributeDirectiveComponent,
            },
            {
                path: 'if-else',
                component: IfelseComponent,
            },
            {
                path: 'for',
                component: ForComponent,
            },
            {
                path: 'pipe',
                component: PipeComponent,
            },
            {
                path: 'template',
                component: TemplateComponent,
            },
            {
                path: 'reactive',
                component: ReactiveComponent,
            },
            {
                path: 'get',
                component: GetApiComponent,
            },
            {
                path: 'post',
                component: PostApiComponent,
            },
            {
                path: 'put',
                component: PutApiComponent,
            },
            {
                path: 'delete',
                component: DeleteApiComponent,
            },
            {
                path: 'lifecycleEvent',
                component: LifecycleEventComponent,
            },
            {
                path: 'ngTemplate',
                component: NgtemplateComponent,
            },
            {
                path: 'ngContainer',
                component: NgcontainerComponent,
            },
            {
                path: 'viewChild',
                component: ViewchildComponent,
            }
        ]
    },

];
