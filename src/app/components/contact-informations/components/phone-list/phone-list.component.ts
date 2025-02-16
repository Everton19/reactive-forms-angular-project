import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { IPhoneDisplay } from '../../../../interfaces/phone-display.interface';
import { preparePhoneList } from '../../../../utils/prepare-phone-list';

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

    const ORIGINAL_PHONE_LIST = this.userPhoneList && this.userPhoneList.length > 0 ? this.userPhoneList : [];

    preparePhoneList(ORIGINAL_PHONE_LIST, true, (phone) => {
      this.phoneListDisplay.push(phone);
    })
  }
}
