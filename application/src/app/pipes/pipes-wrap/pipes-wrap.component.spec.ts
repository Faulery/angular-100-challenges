import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesWrapComponent } from './pipes-wrap.component';

describe('PipesWrapComponent', () => {
  let component: PipesWrapComponent;
  let fixture: ComponentFixture<PipesWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
