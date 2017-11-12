import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-currry',
  templateUrl: './order-currry.component.html',
  styleUrls: ['./order-currry.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCurrryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  order() {
    this.router.navigate(['/list']);
  }

}
