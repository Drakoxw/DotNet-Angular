import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableFooterComponent } from './card-table-footer.component';

describe('CardTableFooterComponent', () => {
  let component: CardTableFooterComponent;
  let fixture: ComponentFixture<CardTableFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTableFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
