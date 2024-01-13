import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';
import { HarryPotterCharactersComponent } from './harry-potter-characters/harry-potter-characters.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HarryPotterCharactersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule, // Add RouterModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
