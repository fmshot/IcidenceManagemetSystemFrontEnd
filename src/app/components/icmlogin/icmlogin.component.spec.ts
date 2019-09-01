import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcmloginComponent } from './icmlogin.component';

describe('IcmloginComponent', () => {
  let component: IcmloginComponent;
  let fixture: ComponentFixture<IcmloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcmloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
