import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarperfilComponent } from './agregarperfil.component';

describe('AgregarperfilComponent', () => {
  let component: AgregarperfilComponent;
  let fixture: ComponentFixture<AgregarperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarperfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
