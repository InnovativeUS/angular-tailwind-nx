import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

import { Lib4Module } from '@angular-tailwind-nx/lib4';

@NgModule({
  imports: [CommonModule, Lib4Module],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class Lib3Module {}
