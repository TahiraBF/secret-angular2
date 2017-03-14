import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSecretComponent } from './one-secret.component';

describe('OneSecretComponent', () => {
  let component: OneSecretComponent;
  let fixture: ComponentFixture<OneSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
