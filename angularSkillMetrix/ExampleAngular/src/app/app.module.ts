import { NgModule } from '@angular/core';

//Import Library
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//Import Component
import { AppComponent } from './app.component';
import { MyHeroComponent } from './my-hero/my-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeroComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
