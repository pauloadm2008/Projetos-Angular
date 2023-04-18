import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteabacaxiComponent } from './componenteabacaxi.component';

describe('ComponenteabacaxiComponent', () => {
  let component: ComponenteabacaxiComponent;
  let fixture: ComponentFixture<ComponenteabacaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteabacaxiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteabacaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
