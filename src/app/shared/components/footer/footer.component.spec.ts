import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain copyright credits', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(component.credits);
  });

  it('should render copyright icon', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-icon')).toBeTruthy();
  });

  it('should contain copyright year', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(component.date.getFullYear());
  });
});
