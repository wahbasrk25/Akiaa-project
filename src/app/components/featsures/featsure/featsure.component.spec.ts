import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatsureComponent } from './featsure.component';

describe('FeatsureComponent', () => {
  let component: FeatsureComponent;
  let fixture: ComponentFixture<FeatsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatsureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
