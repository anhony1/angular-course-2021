import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServerComponent } from './server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './alerts/sucess/success.component';
import { DangerComponent } from './alerts/danger/danger.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { cmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GamecontrolComponent } from './assignment4/gamecontrol/gamecontrol.component';
import { EvenComponent } from './assignment4/even/even.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    DangerComponent,
    ServerComponent,
    ServersComponent,
    Assignment3Component,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipesComponent,
    cmpDatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    GamecontrolComponent,
    EvenComponent,
    OddComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
