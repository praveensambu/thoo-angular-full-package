import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ShopRightRoutingModule } from './shop-right-routing.module';
import { ShopRightComponent } from './shop-right.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { NiceSelectModule } from 'ng-nice-select';


@NgModule({
  declarations: [
    ShopRightComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ShopRightRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    NiceSelectModule
  ]
})
export class ShopRightModule { }
