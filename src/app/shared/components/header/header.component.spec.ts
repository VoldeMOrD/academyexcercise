import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../../../app-routing.module';

describe('Header Component Test', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ AppRoutingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.nativeElement.querySelector('p');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default title', () => {
    expect(title.textContent).toContain(component.title);
  });

  it('should render menu icon', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-icon')).toBeTruthy();
  });
});
