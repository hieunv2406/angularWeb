// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-eligible',
//   templateUrl: './eligible.component.html',
//   styleUrls: ['./eligible.component.scss']
// })
// export class EligibleComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligible',
  templateUrl: './eligible.component.html',
  styles: [
  ]
})
export class EligibleComponent implements OnInit {
  brands = [
    {value: '10', viewValue: '10'},
    {value: '25', viewValue: '25'},
    {value: '50', viewValue: '50'},
    {value: '100', viewValue: '100'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
