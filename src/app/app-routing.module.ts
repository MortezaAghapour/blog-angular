import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  //{path:'login' ,component:LoginComponent},
  //{path:'about' ,component:AboutComponent},
  //{path:'contactUs' ,component:ContactUsComponent},
  //{path:'blogs' ,component:BlogsComponent},
  //{path:'blog/{category}' ,component:BlogsByCategoryComponent},
  //{path:'blog/{slug}' ,component:BlogComponent},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
