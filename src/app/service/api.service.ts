import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { tickets, Ticket } from '../model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  tickets$: Subject<Ticket[]> = new ReplaySubject();

  getTickets(): Observable<Ticket[]> {
    this.tickets$.next(tickets);
    return this.tickets$;
  }

  filterTickets(input: string, tickets: Ticket[], filtered: Ticket[] = []): Ticket[] {
    for (let ticket of tickets) {
      for (let label of ticket.labels) {
        if (label.toLowerCase().startsWith(input.toLowerCase())) {
          filtered.push(ticket);
          break;
        }
      }
    }
    return filtered;
  }

  constructor() { }
}
