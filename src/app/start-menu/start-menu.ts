import { Component, input, output } from '@angular/core';
import { ApplicationId } from '../applications/application.model';

@Component({
  selector: 'app-start-menu',
  imports: [],
  templateUrl: './start-menu.html',
  styleUrl: './start-menu.scss'
})
export class StartMenu {

  visible = input(false);

  applicationSelected = output<ApplicationId>();

  selectApplication(applicationId: ApplicationId) {

    this.applicationSelected.emit(applicationId);

  }

}
