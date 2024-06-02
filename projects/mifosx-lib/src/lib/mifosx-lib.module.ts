import { NgModule } from '@angular/core';
import { MifosxLibComponent } from './mifosx-lib.component';
import { AccountNumberComponent } from './account-number/account-number.component';



@NgModule({
  declarations: [
    MifosxLibComponent,
    AccountNumberComponent
  ],
  imports: [
  ],
  exports: [
    MifosxLibComponent,
    AccountNumberComponent
  ]
})
export class MifosxLibModule { }
