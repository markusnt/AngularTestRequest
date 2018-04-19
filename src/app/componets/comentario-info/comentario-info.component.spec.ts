import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioInfoComponent } from './comentario-info.component';

describe('ComentarioInfoComponent', () => {
  let component: ComentarioInfoComponent;
  let fixture: ComponentFixture<ComentarioInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
