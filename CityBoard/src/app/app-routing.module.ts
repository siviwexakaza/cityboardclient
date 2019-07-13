import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cities', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'chats', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
