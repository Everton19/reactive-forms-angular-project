import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationsEditComponent } from './contact-informations-edit.component';
import { PhoneListEditComponent } from './components/phone-list-edit/phone-list-edit.component';
import { AddressListEditComponent } from './components/address-list-edit/address-list-edit.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactInformationsEditComponent', () => {
  let component: ContactInformationsEditComponent;
  let fixture: ComponentFixture<ContactInformationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        PhoneListEditComponent,
        AddressListEditComponent,
        ContactInformationsEditComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
