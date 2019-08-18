import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgroupComponent } from './allgroup.component';

describe('AllgroupComponent', () => {
  let component: AllgroupComponent;
  let fixture: ComponentFixture<AllgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
