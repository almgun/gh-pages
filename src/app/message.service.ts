import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public msgEmitter: EventEmitter<String> = new EventEmitter();
  constructor() { }

  public emit(msg: String) {
    this.msgEmitter.emit(msg);
  }
  
}
