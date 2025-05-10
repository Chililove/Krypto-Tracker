import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoDetailComponent } from './components/crypto-detail/crypto-detail.component';



const routes: Routes = [
  { path: '', component: CryptoListComponent},
  { path: 'crypto-list', component: CryptoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
