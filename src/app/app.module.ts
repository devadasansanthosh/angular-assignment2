import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesService } from './services/notes.service';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate : [CanActivateRouteGuard]},
  {path: '', redirectTo: 'dashboard', pathMatch : 'full'}
];
@NgModule({
  declarations: [ AppComponent,
  HeaderComponent,
  LoginComponent,
  DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
   ],
  providers: [ NotesService, AuthenticationService, RouterService, CanActivateRouteGuard],
  bootstrap: [AppComponent ]
})
export class AppModule { }
