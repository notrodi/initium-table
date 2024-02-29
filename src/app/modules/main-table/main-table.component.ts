import { Component, ViewEncapsulation } from '@angular/core';
import { CLIENTS } from '@mocks/clients.mock';

@Component({
  selector: 'it-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
  host: { class: 'main-table' },
  encapsulation: ViewEncapsulation.None
})
export class MainTableComponent {
  readonly clients = CLIENTS;
}
