import { Component, Input } from '@angular/core';
import { Ticket } from '../model/ticket.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() tickets: Ticket[] = [];
}
