import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../search.service'
import { Result } from '../result'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  searched: EventEmitter<Observable<Result[]>> = new EventEmitter();

  searchForm = this.fb.group({
    text: [""]
  });

  constructor(private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit() {
  }

  search($event) {
    var query = this.searchForm.controls.text.value;
    this.searched.emit(this.searchService.searchFor(query))
    console.log(`Searching for: ${query}`)
  }
}
