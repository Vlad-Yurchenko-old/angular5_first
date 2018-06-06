import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './components/app/app.component';
import { ArtuserComponent } from './components/artuser/artuser.component';
import { LoginComponent } from './components/login/login.component';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

  ],
  declarations: [
    AppComponent,
    ArtuserComponent,
    LoginComponent,
    CvComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
