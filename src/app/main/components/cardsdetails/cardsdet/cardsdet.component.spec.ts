import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsdetComponent } from './cardsdet.component';

describe('CardsdetComponent', () => {
  let component: CardsdetComponent;
  let fixture: ComponentFixture<CardsdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
