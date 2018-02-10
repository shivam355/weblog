import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'app/component/page-not-found/page-not-found.component';
import { HomeComponent } from 'app/component/home/home.component';
import { WelcomeComponent } from 'app/component/welcome/welcome.component';
import { LogoutComponent } from 'app/component/logout/logout.component';
import { NewPostComponent } from 'app/component/new-post/new-post.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newPost', component: NewPostComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }