import { Component } from '@angular/core';
//import { SharedService } from './shared.service';

/*import { ProductService } from './product.service';
import { Product } from './product';
//import { LoggerService } from './logger.service';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [ProductService, LoggerService, SharedServie]
  //providers: []

})
 
export class AppComponent {

  title = 'Angular First Project';
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

}

  


  /*  products:Product[];
  //productService;
                      //este é o injetor
  constructor(private productService:ProductService) {

    //this.productService=new ProductService();
  
  }

  getProducts() {

    this.products=this.productService.getProducts();
  }

}*/

  




//código implementado para estudo de data binding
/*
public value1: number = 10;

  public array1: Array<number> = [10, 22, 14];

  public dt1: Date = new Date();

  public status: boolean = true;

  public returnString(): string {

    return "String return forom function";
  }
  */

  /*
  //impelementação do modelo de Event binding

  public showAlert() : void {
    console.log('You cliced on the button...');

    alert("Click Event Fire");
    
  }

}
*/

/*
  //implementação do two away binding

  public val: string = "";

}
*/

/*
  //implemntação do @Input decorator
  
  public val: string = "Esse é o alert popup mensagem";
  //implemntação data bindig
  public onSignup(data:any):void{

    let strMessage:string ="Obrigado por se cadasdtrar " + data.name + ". ";
  
    strMessage += "Email " + data.email + " foi registrado com sucesso.";
  
    alert(strMessage);
  */

  //implementação hook
 /* displayChild: boolean=false;

  title = 'angular first PROGRAMANDO'

    constructor() {

      console.log("AppComponent:Constructor");
      
    }

    toggle() {

      this.displayChild=!this.displayChild;

    }
    
    ngOnChanges() {

      console.log("AppComponent:OnChanges");
      
    }
    
    ngOnInit() {

      console.log("AppComponent:OnInit");
      
    }

    ngDoCheck() {

      console.log("AppComponent:DoCheck");

    }

    ngAfterContentInit() {

      console.log("AppComponent:AfterContentInit");

    }

    ngAfterContentChecked() {

      console.log("AppComponent:AfterContentChecked");
      
    }

    ngAfterViewInit() {

      console.log("AppComponent:AfterViewInit");
      
    }

    ngAfterViewChecked() {

      console.log("AppComponent:AfterViewChecked");
    }

    ngOnDestroy() {

      console.log("AppComponent:OnDestroy");
      
    }
}
*/

