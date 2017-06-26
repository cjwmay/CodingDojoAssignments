import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanthreeComponent } from './saiyanthree.component';

describe('SaiyanthreeComponent', () => {
  let component: SaiyanthreeComponent;
  let fixture: ComponentFixture<SaiyanthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
