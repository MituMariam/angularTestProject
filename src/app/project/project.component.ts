import{model} from './../../Model/model'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
title = 'Todo-2';
model = new model();


  constructor(private route: Router) { 

  }

  ngOnInit() {
  }

  NavigateHome(){
    this.route.navigate(['/home']);
  }

  // return user name
  getName(){
    return this.model.user
  }
  getTodoItems(){
    // return all items
    return this.model.items;
      // return only items thats are done
    // return this.model.items.filter(item => item.done);
  }

  addItem(newTask){
    if(newTask !="")
    {
      this.model.items.push( new TodoItem ( newTask , false));
    }
  }
}
