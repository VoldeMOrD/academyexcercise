import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifyComponent } from './user-modify.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserModifyComponent', () => {
  let component: UserModifyComponent;
  let fixture: ComponentFixture<UserModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserModifyComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
