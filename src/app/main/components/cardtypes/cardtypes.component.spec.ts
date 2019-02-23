import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtypesComponent } from './cardtypes.component';

describe('CardtypesComponent', () => {
  let component: CardtypesComponent;
  let fixture: ComponentFixture<CardtypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardtypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
