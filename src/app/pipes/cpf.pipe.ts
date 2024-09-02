import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(cpf: number, hideNumber: boolean): string {
    let formattedCpf = cpf
      .toString()
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    if (hideNumber) {
      formattedCpf = 'XXX.' + formattedCpf.substring(4, 11) + '-XX';
    }

    return formattedCpf;
  }
}
