import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { APIService } from 'src/app/service/api.service';
import { Ticket } from '../../model/ticket.model';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnInit {

  @Input() filteredTickets: Ticket[] = [];

  @Output() btnClick(event: any) {
    const input = event.target.id;
    this.api.tickets$.next(this.api.filterTickets(input, this.filteredTickets, []))
  }

  constructor(private api: APIService) { }

  ngOnInit() {}
}
