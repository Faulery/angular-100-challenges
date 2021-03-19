import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWrapComponent } from './services-wrap.component';

describe('ServicesWrapComponent', () => {
  let component: ServicesWrapComponent;
  let fixture: ComponentFixture<ServicesWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
