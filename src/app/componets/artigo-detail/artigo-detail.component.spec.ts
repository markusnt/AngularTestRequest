import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoDetailComponent } from './artigo-detail.component';

describe('ArtigoDetailComponent', () => {
  let component: ArtigoDetailComponent;
  let fixture: ComponentFixture<ArtigoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
