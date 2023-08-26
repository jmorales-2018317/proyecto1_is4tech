import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto1_is4tech';

  constructor(private modalService: NgbModal) {}

  public open(modal: never): void {
    this.modalService.open(modal);
  }

  signOut() {
    localStorage.removeItem('Token');
    location.reload();
  }
}
