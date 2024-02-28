import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AventuresComponent } from './aventures.component';

describe('AventuresComponent', () => {
  let component: AventuresComponent;
  let fixture: ComponentFixture<AventuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AventuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
