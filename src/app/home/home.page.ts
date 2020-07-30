import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    card_amount: number = 3;  

  constructor() {}

  handleEvent(event:any){
    console.log('Evento recebido');
    alert(event);
  }

}
