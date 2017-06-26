import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanfourComponent } from './saiyanfour.component';

describe('SaiyanfourComponent', () => {
  let component: SaiyanfourComponent;
  let fixture: ComponentFixture<SaiyanfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
