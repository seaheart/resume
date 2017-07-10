import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonIntroduceComponent } from './person-introduce.component';

describe('PersonIntroduceComponent', () => {
  let component: PersonIntroduceComponent;
  let fixture: ComponentFixture<PersonIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
