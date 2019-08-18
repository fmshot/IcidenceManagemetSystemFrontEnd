import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssettableComponent } from './assettable.component';

describe('AssettableComponent', () => {
  let component: AssettableComponent;
  let fixture: ComponentFixture<AssettableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssettableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssettableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
