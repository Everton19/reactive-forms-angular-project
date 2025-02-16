import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationsEditComponent } from './general-informations-edit.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GeneralInformationsEditComponent', () => {
  let component: GeneralInformationsEditComponent;
  let fixture: ComponentFixture<GeneralInformationsEditComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        GeneralInformationsEditComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInformationsEditComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);

    component.userForm = fb.group({
      generalInformations: fb.group({
        name: ['Test Name', Validators.required],
        email: ['test@example.com', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
        country: ['', Validators.required],
        state: ['', Validators.required],
        maritalStatus: [null, Validators.required],
        monthlyIncome: [null, Validators.required],
        birthDate: [null, Validators.required],
      }),

      contactInformations: fb.group({
        phoneList: fb.array([]),
        addressList: fb.array([]),
      }),

      depedentsList: fb.array([]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
