import { Component } from '@angular/core';
import { PersonService } from './person.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Project 1';
  title2 = 'Project 2';

  constructor(private _personservice : PersonService) { }

  ngOnInit() {
    this._personservice.getData().subscribe(data => this.persons = data);
  }
  persons=[]
}
