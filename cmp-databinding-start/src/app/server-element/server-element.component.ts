import {Component, Input, OnInit, OnChanges, ViewEncapsulation, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {

  @Input('srvElement')element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

}
