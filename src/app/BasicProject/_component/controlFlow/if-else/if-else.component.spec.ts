import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseComponent } from './if-else.component';

describe('IfElseComponent', () => {
  let component: IfelseComponent;
  let fixture: ComponentFixture<IfelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfelseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
