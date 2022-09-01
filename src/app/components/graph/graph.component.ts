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
        this.formatData(data);
        this.loading = false;
      });
  }

  formatData(data: any) {}
  // TODO: Turn Yahoo API response into this format
  //   [{
  //     time: new Date(2013, 1, 1),
  //     open: 268.93,
  //     high: 268.93,
  //     low: 262.8,
  //     close: 265.0,
  //     volume: 6118146,
  //   },
  //   {
  //     time: new Date(2013, 1, 4),
  //     open: 262.78,
  //     high: 264.68,
  //     low: 259.07,
  //     close: 259.98,
  //     volume: 3723793,
  //   },
  //   {
  //     time: new Date(2013, 1, 5),
  //     open: 262.0,
  //     high: 268.03,
  //     low: 261.46,
  //     close: 266.89,
  //     volume: 4013780,
  //   },
  //   {
  //     time: new Date(2013, 1, 6),
  //     open: 265.16,
  //     high: 266.89,
  //     low: 261.11,
  //     close: 262.22,
  //     volume: 2772204,
  //   },
  //   {
  //     time: new Date(2013, 1, 7),
  //     open: 264.1,
  //     high: 264.1,
  //     low: 255.11,
  //     close: 260.23,
  //     volume: 3977065,
  //   },
  //   {
  //     time: new Date(2013, 1, 8),
  //     open: 261.4,
  //     high: 265.25,
  //     low: 260.56,
  //     close: 261.95,
  //     volume: 3879628,
  //   },
  //   {
  //     time: new Date(2013, 1, 11),
  //     open: 263.2,
  //     high: 263.25,
  //     low: 256.6,
  //     close: 257.21,
  //     volume: 3407457,
  //   },
  //   {
  //     time: new Date(2013, 1, 12),
  //     open: 259.19,
  //     high: 260.16,
  //     low: 257.0,
  //     close: 258.7,
  //     volume: 2944730,
  //   },
  //   {
  //     time: new Date(2013, 1, 13),
  //     open: 261.53,
  //     high: 269.96,
  //     low: 260.3,
  //     close: 269.47,
  //     volume: 5295786,
  //   },
  //   {
  //     time: new Date(2013, 1, 14),
  //     open: 267.37,
  //     high: 270.65,
  //     low: 265.4,
  //     close: 269.24,
  //     volume: 3464080,
  //   },
  //   {
  //     time: new Date(2013, 1, 15),
  //     open: 267.63,
  //     high: 268.92,
  //     low: 263.11,
  //     close: 265.09,
  //     volume: 3981233,
  //   },
  // ]
}
