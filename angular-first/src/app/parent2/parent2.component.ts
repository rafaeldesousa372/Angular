import { Component } from '@angular/core';
import { SharedService} from '../shared.service'

@Component({
  selector: 'parent2-component',
  templateUrl: './parent2.component.html',
  //styleUrls: ['./parent2.component.css']
  providers: [SharedService]
})

export class Parent2Component {

  sharedValue;

  constructor(private sharedService:SharedService) {

    this.sharedValue=sharedService.getSharedValue();
    console.log('Parent-2 ' + this.sharedValue.toString());
    
   }

  /*ngOnInit(): void {
  }*/

}
