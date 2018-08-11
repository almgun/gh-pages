import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import  {Observable} from 'rxjs';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  constructor(private colorService:ColorsService) { }
  colorList:Observable<string[]>;
  sColorList: string[];

  ngOnInit() {
     this.colorList = this.colorService.getColors();

     this.colorList.subscribe(list => this.sColorList = list);
  }

}
