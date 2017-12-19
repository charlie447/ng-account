import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  money = ''; // 金额
  billTypes = []; // 记账类型
  constructor() {

   }

  ngOnInit() {
  }

}
