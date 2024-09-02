import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input({ required: true }) usersList: UsersListResponse = [];
  @Output('onUserSelected') onUserSelectedEmmit = new EventEmitter<number>();

  userSelectedIndex: number | undefined;

  onUserSelected(index: number) {
    this.userSelectedIndex = index;
    this.onUserSelectedEmmit.emit(index);
  }
}
