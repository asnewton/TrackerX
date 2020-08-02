import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
