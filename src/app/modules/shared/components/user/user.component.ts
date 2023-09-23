import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() closeDialogEvent = new EventEmitter<void>();
  @Input() user!: User;

  ngOnInit(): void {
    console.log(this.user);
  }

  closeDialog() {
    this.closeDialogEvent.emit();
    const modal = document.getElementById('body');
    if (modal) {
      modal.classList.remove('open');
    }
  }
}

type User = {
  userCreated: string;
  dateCreated: string;
  userUpdated: string;
  dateUpdated: string;
};
