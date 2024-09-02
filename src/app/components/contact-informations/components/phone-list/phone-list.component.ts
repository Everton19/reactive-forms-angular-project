import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneTypeEnum } from '../../../../enums/phone-type.enum';
import { IPhone } from '../../../../interfaces/user/phone.interface';
import { IPhoneDisplay } from '../../../../interfaces/phone-display.interface';
import { PHONE_MAP } from '../../../../utils/phone-map';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss',
})
export class PhoneListComponent implements OnChanges {
  @Input({ required: true }) userPhoneList: PhoneList | undefined = [];

  phoneListDisplay: IPhoneDisplay[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const PHONE_LIST_LOADED = Array.isArray(
      changes['userPhoneList'].currentValue
    );

    if (PHONE_LIST_LOADED) {
      this.preparePhoneList();
    }
  }

  preparePhoneList() {
    this.phoneListDisplay = [];

    Object.keys(PHONE_MAP)
      .map(Number)
      .forEach((phoneType: number) => {
        const PHONE_FOUND = this.userPhoneList?.find((phone: IPhone) => {
          return phone.type === phoneType;
        });

        this.phoneListDisplay.push({
          type: PHONE_MAP[phoneType as PhoneTypeEnum],
          phoneNumber: PHONE_FOUND ? this.formatPhoneNumber(PHONE_FOUND) : '-',
        });
      });
  }

  formatPhoneNumber(phone: IPhone) {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
  }
}
