import { Injectable } from '@angular/core';
import { Urls} from './Model/model.url';
import { Http ,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise'; //用来处理dom事件,operator 对 event 和 element 的处理. (还有些疑问)
import { Result} from './Model/model.result';

@Injectable()
export class AccountService {
  private urls = Urls;
  constructor(private http:Http) { }
  getBillTypes(): Promise<Result> {

    return this.get(this.urls.GetBillTypes);
  }
  GetBills(date, skipCount, user): Promise<Result>  {
    const d = new URLSearchParams();
    d.set('date', date);
    d.set('skipCount', skipCount);
    d.set('user', user);
    return this.get(this.urls.GetBills, d);
  }
  GetCount(date: string, type: number, user: string, GroupBy = 0): Promise<Result>  {
    const d = new URLSearchParams();
    d.set('date', date);
    d.set('type', type.toString());
    d.set('user', user);
    d.set('GroupBy', GroupBy.toString());
    return this.get(this.urls.GetCount, d);

  }
  GetTotallCount(user): Promise<Result> {
    return this.get(this.urls.GetTotallCount + '?user=' + user);
  }
  AddBills(data): Promise<Result>{
    return this.post(this.urls.AddBills, data);
  }
  DeleteBill(data: number): Promise<Result>  {
    return this.post(this.urls.DeleteBill, data);
  }
// 对get请求进行封装
 private  get(url: string, data: URLSearchParams = null): Promise<Result>  {
       //http.get(url)（或者post put delete），访问服务器以后会返回一个observation对象
    //实上是observation<服务器返回值>。通过toPromise转换成promise对象以后，就可以正常的使用then方法去处理返回值了。
    //通过promise的then方法，可以获得到服务器的返回值。各返回值都是json字符串，而在angular还是先按字符串处理。
    //调用字符串的.json()方法转化为json数组或者json对象，继续调用关键字as将json数组或者json对象转化类，转化的方式是属性对应。
    return this.http.get(url, { search: data} )
    .toPromise().then(r => r.json() as Result)
    .catch(this.handleError);
}
  // 对post请求进行封装
  private  post(url: string, data: any): Promise<Result>  {
    return this.http.post(url, data)
      .toPromise().then(r => r.json() as Result)
      .catch(this.handleError);
  }
  // 捕获异常并输出
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
