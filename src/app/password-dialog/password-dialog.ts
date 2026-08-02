import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-dialog',
  imports: [FormsModule],
  templateUrl: './password-dialog.html',
  styleUrl: './password-dialog.scss'
})
export class PasswordDialog {

  password = '';

  invalid = false;

  closed = output();


  submit() {

    this.invalid = true;

  }


  close() {

    this.closed.emit();

  }

}