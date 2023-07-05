import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--<app-diretivas-atributos></app-diretivas-atributos>-->
  <!--<app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">add</button>

  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>

  <app-output (enviarDados)="setDados($event)"></app-output>-->
  <app-food-list></app-food-list>
  <app-food-add></app-food-add>
  `
})
export class AppComponent implements OnInit{

  public getDados: {nome: string, idade: number} | undefined

 constructor(){}
public addValue: number = 0;

 ngOnInit(): void {
}
public add(){
  this.addValue += 1;
}

public setDados(event: {nome: string, idade: number}){
  this.getDados = event;
}

}

