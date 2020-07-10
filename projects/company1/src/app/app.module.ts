import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavComponent } from './nav/nav.component';

const providers = []

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,

  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class Company1SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,

    }
  }
}
