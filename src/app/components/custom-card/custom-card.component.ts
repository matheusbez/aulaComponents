import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {

  title: string = "Boom Boom Boom";

  @Input() amount:number;

  @Output() buttonPressed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  boomboomboom() { 
    console.log('Evento emitido');
    this.buttonPressed.emit("Gotta get that"); 
  }

}
