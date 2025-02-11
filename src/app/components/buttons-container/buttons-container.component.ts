import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss',
})
export class ButtonsContainerComponent {
  @Input({ required: true }) isEditMode: boolean = false;

  @Output('onEditButton') onEditButtonEmmit = new EventEmitter<void>();
  @Output('onCancelButton') onCancelButtonEmmit = new EventEmitter<void>();

  onEditButton(){
    this.onEditButtonEmmit.emit();
  }

  onCancelButton(){
    this.onCancelButtonEmmit.emit();
  }
}
