import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpeliComponent } from './agregarpeli.component';

describe('AgregarpeliComponent', () => {
  let component: AgregarpeliComponent;
  let fixture: ComponentFixture<AgregarpeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarpeliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarpeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
