import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtuserComponent } from './artuser.component';

describe('ArtuserComponent', () => {
  let component: ArtuserComponent;
  let fixture: ComponentFixture<ArtuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
