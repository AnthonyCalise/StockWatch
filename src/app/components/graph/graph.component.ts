import { StockDataService } from './../../services/stock-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() selectedStock!: string;
  loading: boolean = false;
  graphData: any = null;
  constructor(private stockDataService: StockDataService) {}

  ngOnInit(): void {
    this.loading = true;
    this.stockDataService
      .getHistoricalData(this.selectedStock, '1mo')
      .subscribe((data) => {
        this.graphData = data;
        this.loading = false;
      });
  }
}
