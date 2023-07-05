import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{

  public valor: boolean = true;
  public heigthPX: string = "20px";
  public backgroundcolor : string = "green";
  public nome: string = "";
  public list: Array<{nome: string}> = [{nome: "Samuel"}]
  public date:Date = new Date();

  
  constructor(){}

  ngOnInit(): void {
    
    setInterval( () => {
      if(this.valor){
        this.valor = false
      }else{
        this.valor = true
      }

      if(this.heigthPX == "20px"){
        this.heigthPX = "50px";
        this.backgroundcolor = "yellow";
      }else{
        this.heigthPX = "20px";
        this.backgroundcolor = "green";
      }
    },5000)

  }

  public salvar (){
    this.list.push({nome: this.nome});
    this.nome = "";
  }
}
