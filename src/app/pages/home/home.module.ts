import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
