import { environment } from './../environments/environment.prod';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './core/app-routing.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


import { PosService } from './pos.service';
import { AuthService } from './core/auth.service';



import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DatabaseService } from './database.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './welcome/login/login.component';
import { ResetpasswordComponent } from './welcome/resetpassword/resetpassword.component';
import { NotificationComponent } from './notification/notification.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    ResetpasswordComponent,
    NotificationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    HomeModule,
    AdminModule
  ],
  providers: [PosService, DatabaseService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
