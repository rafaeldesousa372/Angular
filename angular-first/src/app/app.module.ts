import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MessageComponent } from './message/message.component';
//import { ChildComponent } from './child/child.component';
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { SharedService } from './shared.service';

//import do pipe custumizado
import { SqrtPipe} from './raizquadrada';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
//import { HomeComponent } from './home/home.component';
//import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Child1Component,
    Child2Component,
    Child3Component,
    SqrtPipe,
    RoutingComponent
    //HomeComponent,
    //ContactusComponent
    //MessageComponent,
    //ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpModule,
    FormsModule
  ],          //token de identificação = nome da classe
  //providers: [ProductService, LoggerService],
  providers: [ProductService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

