import { Component,OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{

  public foodList: Array<FoodList> = [];
  constructor(private foodlistService: FoodlistService){
  }
  ngOnInit(): void {
    this.foodlistService.foodList().subscribe(
      res => this.foodList = res,
      error => error
      
    );
    this.foodlistService.emitEvent.subscribe(
      res => {
      alert(`Olha voce add = ${res.nome}`);
      return this.foodList.push(res)
    }
    );
  }
  public foodListDelete(id: number){
    return this.foodlistService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      }
      
    )
  }

  public foodListEdit(value:string, id: number){
    this.foodlistService.foodListEdit(value,id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }
}
