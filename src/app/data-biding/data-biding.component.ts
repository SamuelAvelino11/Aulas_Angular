import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome : String = "Samuel";
  public idade : number = 23;

  public checkedDisabled : boolean = true;

  public alertaInfo(){
    alert("Deu bom!");
  }
  public alertaInfo2(message: String){
    alert(message);
  }

}
