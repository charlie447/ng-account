import { Component, OnInit,ViewChild } from '@angular/core';
import {WeUITopTips} from 'angular-weui';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  money = ''; // 金额
  billTypes = []; // 记账类型
  //底部会和中部滑动而滑动
  //解决问题，1、固定底部和顶部，2、固定中间按钮。
//我选择固定中间按钮，使用动态绑定样式让中间部分的高度等于页面高度-底部和顶部的高度，设置overflo为scroll;
  contentStyle = {   // 绑定的样式          
    'overflow': 'scroll',
    'height': window.screen.availHeight - 145 + 'px'
  };
  constructor(private service:AccountService) {
    
    let n = 0;
    while (n < 20) { // 模拟一些数据
      this.billTypes.push({name: '食物',  id: n});
      n++;
    }
    service.getBillTypes();
   }
   @ViewChild('TopTip') TopTip: WeUITopTips;
  toastText= '';
    add(id: number) {
       this.alert(id.toString());
  }
          /// 自己封装的消息提示
  private alert(msg) {
    this.toastText = msg;
    this.TopTip.show();
  }

  ngOnInit() {
  }

}
