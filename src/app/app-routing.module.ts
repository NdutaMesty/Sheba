import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProductsComponent } from './shared/products/products.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'shop', component: ProductsComponent },
  { path: 'home', component: LandingComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
