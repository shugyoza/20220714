import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { APIService } from '../service/api.service';
import { Ticket } from '../model/ticket.model';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFieldComponent implements OnInit {

  @Input() tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  subscriptions$: Subscription[] = [];

  searchField = new FormControl('');

  onSubmit(): void {
    // this.api.filterTickets(this.searchField.value, this.filteredTickets);
  }

  debounceTimeSearch(delay: number = 0): void {
    const observer = {
      next: (input: any) => {
        this.filteredTickets = [];
        this.api.filterTickets(input, this.tickets, this.filteredTickets);
        if (input === '') this.filteredTickets = [];
      },
      error: (err: Error) => console.error(err)
    };
    const subscription$ = this.searchField.valueChanges
      .pipe(debounceTime(delay))
      .subscribe(observer);
    this.subscriptions$.push(subscription$);
  }

  init(): void {
    const observer = {
      next: (tickets: Ticket[]) => {
        this.ref.detectChanges();
        this.tickets = tickets
      },
      error: (err: Error) => console.error(err)
    };
    const subscription$ = this.api.tickets$.subscribe(observer);
    this.subscriptions$.push(subscription$);
  }
  constructor(
    private api: APIService,
    private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe())
  }
}
