import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true;
  public list: Array<{nome : string, idade: number}> = [
    {nome: "Dener Troquatte", idade: 25},
    {nome: "José", idade: 55},
    {nome: "Maria", idade: 67}
  ];

  public nome:string = 'dener';
  constructor(){}

  ngOnInit(): void {
    
    /*0*setInterval( ()=> {
      if(this.condition){
      this.condition = false;
      } else{
        this.condition = true;
      }
    }, 2000)**/

  }

  public onClickAddList(){
    this.list.push({nome: "Nay", idade: 31});
  }

  public onClickEventList(event: MouseEvent){

    console.log(event);
  }

}
