import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuGenralComponent } from './shared/components/menu-genral/menu-genral.component';
import { SelfieListComponent } from './features/selfies/selfie-list/selfie-list.component';
import { UnSelfieReadonlyComponent } from './features/selfies/un-selfie-readonly/un-selfie-readonly.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuGenralComponent,
    SelfieListComponent,
    UnSelfieReadonlyComponent,
  ],
  imports: [
    BrowserModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
