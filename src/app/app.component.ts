import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Odd: boolean;

  oddArray =[];
  evenArray= [];
 

  setOddEven(event: number){
    if(event % 2 == 0)
    {
      this.evenArray.push(event);
    }
    else{
      this.oddArray.push(event);
    }
  }

  setNumber(event:number){
    this.setOddEven(event);
  }
}
