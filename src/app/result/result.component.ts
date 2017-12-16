import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Result } from '../result'
import { ResultDetailsComponent } from '../result-details/result-details.component'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result : Result
  constructor() { }
  ngOnInit() {
  }
  @ViewChild( ResultDetailsComponent ) alert: ResultDetailsComponent;

  mouseEnter(){
     console.log("mouse enter : " + this.result.title);
    this.alert.result = this.result;

  }
  mouseLeave(){
    console.log('mouse leave :' + this.result.title);
    this.alert.result = null ;
  }


}
