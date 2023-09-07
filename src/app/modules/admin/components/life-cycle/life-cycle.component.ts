import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html'
})
export class LifeCycleComponent implements OnDestroy {
  constructor(private router: Router) {}

  textValue = '';
  prevText = '';

  ngOnDestroy(): void {
    console.log('On Destroy done!');
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
