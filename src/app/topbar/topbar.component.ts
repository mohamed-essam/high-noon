import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Result } from '../result'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Output()
  searched: EventEmitter<Observable<Result[]>> = new EventEmitter();

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
