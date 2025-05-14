import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoDetailComponent } from './components/crypto-detail/crypto-detail.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'crypto-list', component: CryptoListComponent },
  { path: 'crypto-detail/:id', component: CryptoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
