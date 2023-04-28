import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableElementComponent } from './card-table-element.component';

describe('CardTableElementComponent', () => {
  let component: CardTableElementComponent;
  let fixture: ComponentFixture<CardTableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTableElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
