import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'products/edit/:id', pathMatch: 'full', component: EditComponent },
  { path: 'products/delete/:id', pathMatch: 'full', redirectTo: '/home' },
  { path: 'products/new', pathMatch: 'full', component: NewComponent },
  { path: 'products', pathMatch: 'full', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
