import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/chracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characterList: Character[] = [];
  @Output() onDeleteId: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(id: string): void {
  //   this.onDeleteId.emit(id);
  //   console.log(id);
  // }

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
    console.log(id);
  }
}
