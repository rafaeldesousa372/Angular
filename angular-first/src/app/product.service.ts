import { Product } from './Product'
import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
//decorator
@Injectable()

export class ProductService{

    //constructor(private loggerService: LoggerService) 
    
    constructor(@Inject(LoggerService) private loggerService) {

        this.loggerService.log("Product Service Constructed");
        }

    

    public getProducts() {

        this.loggerService.log("getProducts called");
        let products:Product[];

        products=[

            new Product(1, 'Memory Card', 500.00),
            new Product(1, 'Pen Drive', 750.00),
            new Product(1, 'Power Bank', 500.00),

        ]

        this.loggerService.log(products);
    
        return products; 

    }
}