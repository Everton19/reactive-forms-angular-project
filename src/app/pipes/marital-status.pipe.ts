import { Pipe, PipeTransform } from '@angular/core';
import { MariatalStatusEnum } from '../enums/marital-status.enum';

@Pipe({
  name: 'maritalStatus',
})
export class MaritalStatusPipe implements PipeTransform {
  transform(maritalStatus: number | undefined): string {
    const maritalStatusMap: { [key in MariatalStatusEnum]: string } = {
      [MariatalStatusEnum.SINGLE]: 'Solteiro',
      [MariatalStatusEnum.MARRIED]: 'Casado',
      [MariatalStatusEnum.DIVORCED]: 'Divorciado',
    };

    return maritalStatus
      ? maritalStatusMap[maritalStatus as MariatalStatusEnum]
      : '';
  }
}
