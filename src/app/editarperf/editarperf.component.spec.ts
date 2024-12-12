import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarperfComponent } from './editarperf.component';

describe('EditarperfComponent', () => {
  let component: EditarperfComponent;
  let fixture: ComponentFixture<EditarperfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarperfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarperfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
