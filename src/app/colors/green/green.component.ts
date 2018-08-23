import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {

  constructor(private msg:MessageService) { }
  public value:string;

  ngOnInit() {
    this.msg.msgEmitter.subscribe(val => {
      this.value = val;
    })
  }

}
