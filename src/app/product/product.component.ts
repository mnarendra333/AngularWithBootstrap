import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `{{name}}
    
  <ul>

      <li *ngFor="let hero of heroes">
          <h2>{{hero}}</h2>
      </li>

  </ul> ` ,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  name : string = "welcome to angular";

  heroes : any[] = ['kamal','surya','prabhas','venki'];

}
