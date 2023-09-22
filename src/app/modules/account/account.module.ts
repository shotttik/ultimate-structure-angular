import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { InputModule, ButtonModule } from '@ui/*';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [InputModule, ButtonModule, CommonModule, AccountRoutingModule],
})
export class AccountModule {}
