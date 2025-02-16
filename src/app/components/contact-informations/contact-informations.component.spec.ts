import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationsComponent } from './contact-informations.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { AddressListComponent } from './components/address-list/address-list.component';

describe('ContactInformationsComponent', () => {
  let component: ContactInformationsComponent;
  let fixture: ComponentFixture<ContactInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactInformationsComponent,
        PhoneListComponent,
        AddressListComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
