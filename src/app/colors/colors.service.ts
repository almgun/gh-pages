import { Injectable } from '@angular/core';
import {COLORS} from './mock-colors';
import  {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }
  public getColors() : Observable<string[]>{
    return of(COLORS);
  }
}
