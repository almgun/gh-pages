import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap,map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({  
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css']
})
export class ColorDetailComponent implements OnInit {


  color$: Observable<string>;
  color: string;
  sugar:boolean = true;
  constructor(private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    //Simlyfied static alternative (only initial value)
    this.color = this.route.snapshot.paramMap.get('id');

    //Replace with switchMap if creating another async call (like http.get)
    this.color$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        params.get('id'))
    );
  }

}
