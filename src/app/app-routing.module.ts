import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components that you want to use for routing
// import { HomeComponent } from './home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }, // Default route, maps to HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
