import { Component, OnInit, Output } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor(private msg:MessageService) { }

  ngOnInit() {
  }

  @Output()
  onClick(message: string){
    console.log('clicked');
    this.msg.emit("sent " + new Date());
  }

}
