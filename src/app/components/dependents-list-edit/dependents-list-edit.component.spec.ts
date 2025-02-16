import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsListEditComponent } from './dependents-list-edit.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DependentsListEditComponent', () => {
  let component: DependentsListEditComponent;
  let fixture: ComponentFixture<DependentsListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        DependentsListEditComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentsListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
