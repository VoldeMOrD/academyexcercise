import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, MenuComponent ],
  imports: [ CommonModule, AppRoutingModule, AngularMaterialModule ],
  exports: [ AngularMaterialModule, HeaderComponent, FooterComponent, MenuComponent ]
})
export class SharedModule { }
