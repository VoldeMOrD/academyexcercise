import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, MenuComponent, LoginComponent ],
  imports: [ CommonModule, AppRoutingModule, AngularMaterialModule, FormsModule ],
  exports: [AngularMaterialModule, HeaderComponent, FooterComponent, MenuComponent, LoginComponent ]
})
export class SharedModule { }
