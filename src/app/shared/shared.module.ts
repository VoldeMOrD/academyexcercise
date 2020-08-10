import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ HeaderComponent, FooterComponent, MenuComponent ],
  imports: [ CommonModule,AppRoutingModule, AngularMaterialModule ],
  exports: [ AngularMaterialModule, HeaderComponent, FooterComponent, MenuComponent ]
})
export class SharedModule { }
