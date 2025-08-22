import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonicBounceComponent } from './sonic-bounce.component';

describe('SonicBounceComponent', () => {
  let component: SonicBounceComponent;
  let fixture: ComponentFixture<SonicBounceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SonicBounceComponent]
    });
    fixture = TestBed.createComponent(SonicBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
