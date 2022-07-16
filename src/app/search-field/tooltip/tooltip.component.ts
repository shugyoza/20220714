import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Ticket, tickets } from '../../model/ticket.model';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnInit {

  @Input() filteredTickets: Ticket[] = [];

  ngOnInit() {}
}
