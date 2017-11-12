import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';


export interface Order {
  curry: string;
  soup: string;
  spicy: string;
  topping: string;
  rice: string;
}

const data: Order[] = [
  {curry: 'チキンと1日分の野菜', soup: 'レギュラー', spicy: '2', topping: '', rice: 'M'},
  {curry: 'ひき肉納豆と野菜', soup: 'マイルド', spicy: '1', topping: 'チキン、パプリカ', rice: 'L'},
  {curry: 'チキンと1日分の野菜', soup: 'ココナッツ', spicy: '9', topping: 'ナス', rice: 'S'},
]


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderListComponent implements OnInit {
  displayedColumns = ['curry', 'soup', 'spicy', 'topping', 'rice'];
  dataSource = new ExampleDataSource();

  constructor(private router: Router) { }

  ngOnInit() {

  }

  back() {
    this.router.navigate(['/']);
  }
}

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Order[]> {
    return Observable.of(data);
  }

  disconnect() {}
}