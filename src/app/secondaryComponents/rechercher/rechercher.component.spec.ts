import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherComponent } from './rechercher.component';

describe('RechercherComponent Mobile', () => {
  let component: RechercherComponent;
  let fixture: ComponentFixture<RechercherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Simulate mobile device
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 500});
    fixture = TestBed.createComponent(RechercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create in mobile view', () => {
    expect(component).toBeTruthy();
    expect(component.isMobile).toBeTruthy();
    // You can add more tests here to check for mobile-specific logic
  });
});


