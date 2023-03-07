import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent, 
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent, 
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { } 
//donde se va a importar donde se va a utilizar
//solo en los que estan en pages.modules y no en 
//auth
