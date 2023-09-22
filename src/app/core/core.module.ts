import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, CommonModule],
})
export class CoreModule {}