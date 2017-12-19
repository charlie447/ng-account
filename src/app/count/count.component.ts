import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  activeIndex = 0; // 当前激活标记
  constructor() { }
  contentStyle = {   // 绑定的样式          
    'overflow': 'scroll',
    'height': window.screen.availHeight - 145 + 'px'
  };
  ngOnInit() {
  }
  setActive(i) { // 设置标记
    this.activeIndex = i;
  }
}
