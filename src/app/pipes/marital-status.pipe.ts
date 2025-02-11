import { Pipe, PipeTransform } from '@angular/core';
import { MariatalStatusEnum } from '../enums/marital-status.enum';
import { maritalStatusDescriptionMap } from '../utils/marital-status-description-map';

@Pipe({
  name: 'maritalStatus',
})
export class MaritalStatusPipe implements PipeTransform {
  transform(maritalStatus: number | undefined): string {
    return maritalStatus
      ? maritalStatusDescriptionMap[maritalStatus as MariatalStatusEnum]
      : '';
  }
}
