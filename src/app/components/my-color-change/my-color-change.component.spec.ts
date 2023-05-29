import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColorChangeComponent } from './my-color-change.component';

describe('MyColorChangeComponent', () => {
  let component: MyColorChangeComponent;
  let fixture: ComponentFixture<MyColorChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyColorChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyColorChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
