import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesWrapComponent } from './directives-wrap.component';

describe('DirectivesWrapComponent', () => {
  let component: DirectivesWrapComponent;
  let fixture: ComponentFixture<DirectivesWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
