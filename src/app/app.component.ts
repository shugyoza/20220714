import { Component, OnInit } from '@angular/core';
import { APIService } from './service/api.service';
import { Ticket } from './model/ticket.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '20220714';

  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  subscriptions$: any[] = [];

  constructor(private api: APIService) { }

  subscribeTickets(): void {
    const observer = {
      next: (tickets: Ticket[]) => this.tickets = tickets,
      error: (err: Error) => console.error(err)
    };
    const subscription$ = this.api.tickets$.subscribe(observer);
    this.subscriptions$.push(subscription$);
  }

  ngOnInit(): void {
    this.api.getTickets();
    this.subscribeTickets();
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe());
  }
}
