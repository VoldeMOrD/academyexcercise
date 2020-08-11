import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('Header Component Test', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.nativeElement.querySelector('span');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default title', () => {
    expect(title.textContent).toContain(component.title.toUpperCase());
  });

  it('should render logout icon', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-icon')).toBeTruthy();
  });
});
