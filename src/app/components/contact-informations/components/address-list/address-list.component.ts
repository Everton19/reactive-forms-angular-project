import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressList } from '../../../../types/address-list';
import { AddressTypeEnum } from '../../../../enums/address-type.enum';
import { IAddress } from '../../../../interfaces/user/address.interface';
import { ADDRESS_MAP } from '../../../../utils/address-map';
import { IAddressDisplay } from '../../../../interfaces/address-display.interface';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.scss',
})
export class AddressListComponent implements OnChanges {
  @Input({ required: true }) userAddressList: AddressList | undefined = [];

  addressListDisplay: IAddressDisplay[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const ADRESS_LIST_LOADED = Array.isArray(
      changes['userAddressList'].currentValue
    );

    if (ADRESS_LIST_LOADED) {
      this.prepareAddressList();
    }
  }

  prepareAddressList() {
    this.addressListDisplay = [];

    Object.keys(ADDRESS_MAP)
      .map(Number)
      .forEach((addressType: number) => {
        const ADDRESS_FOUND = this.userAddressList?.find(
          (address: IAddress) => {
            return address.type === addressType;
          }
        );

        this.addressListDisplay.push(
          this.returnAddressDisplay(ADDRESS_FOUND, addressType)
        );
      });
  }

  returnAddressDisplay(
    ADDRESS_FOUND: IAddress | undefined,
    addressType: number
  ): IAddressDisplay {
    if (!ADDRESS_FOUND) {
      return {
        typeDescription: ADDRESS_MAP[addressType as AddressTypeEnum],
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '-',
        city: '-',
      };
    }

    return {
      typeDescription: ADDRESS_MAP[addressType as AddressTypeEnum],
      ...ADDRESS_FOUND,
    };
  }
}
