import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
{path:'home',component : HomeComponent},
{ path:'project',component : ProjectComponent},
{path:'person-detail',component : PersonDetailComponent},
{path:'profile',component : ProfileComponent},
{path:'**',component : NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents =[HomeComponent,ProjectComponent,PersonDetailComponent,ProfileComponent,NotFoundComponent]
