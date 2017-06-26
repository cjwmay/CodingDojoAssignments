import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyantwoComponent } from './saiyantwo.component';

describe('SaiyantwoComponent', () => {
  let component: SaiyantwoComponent;
  let fixture: ComponentFixture<SaiyantwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyantwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyantwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
