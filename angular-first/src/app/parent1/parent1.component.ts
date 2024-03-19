import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  //atenção ao seletor
  selector: 'parent1-component',
  templateUrl: './parent1.component.html',
  //styleUrls: ['./parent1.component.css']
  providers: [SharedService]
})

export class Parent1Component {

  sharedValue;

  constructor(private sharedService:SharedService) { 

    this.sharedValue=sharedService.getSharedValue();
    console.log('Parent-1 '+ this.sharedValue.toString());
    
  }

  /*ngOnInit(): void {
  }*/

}
