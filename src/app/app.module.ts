import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // Import NgxPaginationModule

import { AppComponent } from './app.component';
import { GithubService } from './github.service'; // Import GithubService

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule // Ensure NgxPaginationModule is imported here
  ],
  providers: [GithubService], // Provide GithubService
  bootstrap: [AppComponent]
})
export class AppModule { }
