import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/10brisket.jpg'),new Recipe('A Test Recipe', 'This is just a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/10brisket.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
