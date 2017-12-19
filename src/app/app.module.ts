import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeUIModule } from 'angular-weui';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes,RouterModule} from '@angular/router';
import { EchartsNg2Module } from 'echarts-ng2';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccountingComponent } from './accounting/accounting.component';
import { CountComponent } from './count/count.component';
import { CountYearComponent } from './count/count-year/count-year.component';
import { CountMonthComponent } from './count/count-month/count-month.component';
import { AccountService} from './account.service';

export const ROUTES: Routes = [
    { path: '', component: AccountingComponent },
    { path: 'count', component: CountComponent ,children:[
      {path: '',component:CountMonthComponent},
      {path: 'year',component:CountYearComponent}
    ]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountingComponent,
    CountComponent,
    CountYearComponent,
    CountMonthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WeUIModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    EchartsNg2Module
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
