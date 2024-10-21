import { Component, inject } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth = inject(AngularFireAuth)
  startYear = 2019;
  currentYear = new Date().getFullYear();
  user = this.auth.authState;
}
