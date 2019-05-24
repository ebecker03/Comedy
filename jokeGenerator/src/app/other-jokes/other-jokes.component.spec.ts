import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherJokesComponent } from './other-jokes.component';

describe('OtherJokesComponent', () => {
  let component: OtherJokesComponent;
  let fixture: ComponentFixture<OtherJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
