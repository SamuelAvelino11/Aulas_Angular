import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list : Array<{nome: string, idade: number}> = [
    {nome : "Samuel Dos Santos", idade: 23},
    {nome : "Monica Dos Santos", idade: 43},
    {nome : "Odete Dos Santos", idade: 69}
  ]
  constructor(){}

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }

}
