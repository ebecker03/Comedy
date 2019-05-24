import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { ChuckJokesComponent } from './chuck-jokes/chuck-jokes.component';
import { OtherJokesComponent } from './other-jokes/other-jokes.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dad-jokes', component: DadJokesComponent},
  {path: 'chuck-jokes', component: ChuckJokesComponent},
  {path: 'other-jokes', component: OtherJokesComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
