import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestCastComponent } from './forest-cast.component';

describe('ForestCastComponent', () => {
  let component: ForestCastComponent;
  let fixture: ComponentFixture<ForestCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestCastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForestCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
