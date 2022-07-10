import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenuItemComponent } from './topmenu-item.component';

describe('TopmenuItemComponent', () => {
  let component: TopmenuItemComponent;
  let fixture: ComponentFixture<TopmenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopmenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
