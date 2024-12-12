import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarperfilComponent } from './borrarperfil.component';

describe('BorrarperfilComponent', () => {
  let component: BorrarperfilComponent;
  let fixture: ComponentFixture<BorrarperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrarperfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
