import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StatesList } from '../../types/states-list';
import { IState } from '../../interfaces/states-response/state.interface';
import { maritalStatusArray } from '../../utils/marital-status-description-map';

@Component({
  selector: 'app-general-informations-edit',
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.scss',
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {
  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];
  @Input({ required: true }) statesList: StatesList = [];

  @Output('onCountrySelected') countrySelectedEmitt = new EventEmitter<string>();

  countriesListFiltered: CountriesList = [];
  statesListFiltered: StatesList = [];

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }

  get stateControl(): FormControl {
    return this.userForm.get('generalInformations.state') as FormControl;
  }

  ngOnInit() {
    this.watchCountryChangesFilter();
    this.watchStateChangesFilter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countriesListFiltered = this.countriesList;
    this.statesListFiltered = this.statesList;
  }

  get maritalStatusArray(){
    return maritalStatusArray;
  }

  private watchCountryChangesFilter() {
    this.countryControl.valueChanges.subscribe((value: string) => {
      this.filterCountriesList(value);
    });
  }

  private watchStateChangesFilter() {
    this.stateControl.valueChanges.subscribe((value: string) => {
      this.filterStatesList(value);
    });
  }

  filterStatesList(search: string) {
    this.statesListFiltered = this.statesList.filter((state: IState) =>
      state.name.toLocaleLowerCase().includes(search.toLowerCase().trim())
    );
  }

  private filterCountriesList(search: string) {
    this.countriesListFiltered = this.countriesList.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase().trim())
    );
  }

  onCountrySelected($event: MatAutocompleteSelectedEvent) {
    this.countrySelectedEmitt.emit($event.option.value);
  }
}
