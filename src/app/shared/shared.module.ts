import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, SidebarComponent],
})
export class SharedModule {}
