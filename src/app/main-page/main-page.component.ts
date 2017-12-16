import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSearch($event) {
    console.log("Starting search")
    $event.subscribe(results => this.handleResult(results))
  }

  private handleResult(results) {
    console.log(results)
  }
}
