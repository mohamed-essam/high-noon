import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { SearchComponent } from './search/search.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchServiceService } from './search-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ResultsPageComponent,
    ResultsComponent,
    ResultComponent,
    ResultDetailsComponent,
    SearchComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
