import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServicioComponent } from './detail-servicio.component';

describe('DetailServicioComponent', () => {
  let component: DetailServicioComponent;
  let fixture: ComponentFixture<DetailServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
