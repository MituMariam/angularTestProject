import { PersonService } from '../person.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor(private _personservice : PersonService) { }

  ngOnInit() {
    this._personservice.getData().subscribe(data => this.persons = data);
  }


  persons=[];

}

//code is not flexible 
//not real, we are always have same engine and same tire
// export class Engine{
//   constructor(p1,p2){

//   }
// }

// export class Tires{
//   constructor(p1,p2,p3){
    
//   }
// }


// without DI
// export class Car{
// engineX;
// tireABC;

//   constructor(){
//     this.engineX = new Engine();
//     this.tireABC = new Tires();
//   }
// }



// lets use design pattern(DI)
// export class Car2{
//   engineX;
//   tireABC;
  
//     constructor(engine,tire){
//       this.engineX = engine;
//       this.tireABC = tire;
//     }
//   }
//   var x = new Engine();
//   var y = new Tire();

//   var mycar = new Car2(x,y);

