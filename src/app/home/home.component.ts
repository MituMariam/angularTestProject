import { PersonService } from '../person.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title1 = 'Project 1';
  title2 = 'Project 2';
  projectText:string ="Angular project";
  projects = [];
  itemCounter:number;



  constructor(private _personservice : PersonService) { }

  ngOnInit() {
    this._personservice.getData().subscribe(data => this.persons = data);
  }
  persons=[]

  addItem(){
    this.projects.push(this.projectText);
    this.projectText ="";
    this.itemCounter = this.projects.length;
  }

  removeItem(i){
    this.projects.splice(i,1);
    this.itemCounter = this.projects.length;
  }
}
