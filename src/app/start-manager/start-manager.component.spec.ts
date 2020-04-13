import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartManagerComponent } from './start-manager.component';

describe('StartManagerComponent', () => {
  let component: StartManagerComponent;
  let fixture: ComponentFixture<StartManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
