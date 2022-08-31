import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

const stocks = ['AAPL', 'TSLA', 'GOOGL', 'MSFT'];
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit {
  public model: any;
  constructor() {}

  ngOnInit(): void {}

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 1
          ? []
          : stocks
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
}
