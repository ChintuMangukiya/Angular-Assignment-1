import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})
export class GamecontrolComponent {

  value = 0;

  a:any;

  isFirstClick=true;

  @Output('number') event= new EventEmitter<number>();

  startInterval(){
    if(this.isFirstClick)
    {

      this.isFirstClick = false;
    this.a =setInterval(()=>{
      this.value++;
      this.event.emit(this.value);

      console.log(this.value);
    },1000);
  }
  }

  stopInterval(){
    clearInterval(this.a);
  }
}
