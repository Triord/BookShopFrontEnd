import { RoleService } from './services/role.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserComponent } from './component/user/user/user.component';

import { LoginComponent } from './component/login/login/login.component';
import { VieuwComponent } from './component/book/vieuw/vieuw.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppareilsService } from './services/appareils.service';
import { HttpInterceptorAuthService } from './services/httpInterceptorAuth.service';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule, FormControl, ControlContainer, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ManagementComponent } from './component/book/management/management.component';
import { BookDetailsComponent } from './component/book/bookDetails/book-details/book-details.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import { ProfilComponent } from './component/user/profil/profil.component';



const routes: Routes = [

  { path: 'user', canActivate: [AuthGuardService],component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact',component: ContactComponent},
  {path: 'home', component: VieuwComponent},
  {path: 'book', canActivate: [AuthGuardService], component: ManagementComponent},
  {path: 'bookDetails/:id', canActivate: [AuthGuardService], component: BookDetailsComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'not-found', component: VieuwComponent},
  { path: '', component: VieuwComponent },
  {path: '**',canActivate: [AuthGuardService], redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    VieuwComponent,
    LoginComponent,
    UserComponent,
    ContactComponent,
    HomeComponent,
    ManagementComponent,
    BookDetailsComponent,
    RegistrationComponent,
    ProfilComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AppareilsService,
    AuthGuardService,
    RoleService,

   { provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorAuthService,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
