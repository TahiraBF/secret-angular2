import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSecretComponent } from './featured-secret.component';

describe('FeaturedSecretComponent', () => {
  let component: FeaturedSecretComponent;
  let fixture: ComponentFixture<FeaturedSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
