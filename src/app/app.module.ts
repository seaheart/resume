import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonIntroduceComponent } from './person-introduce/person-introduce.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonIntroduceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
