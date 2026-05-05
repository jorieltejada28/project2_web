import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent {
@ViewChild('lineChart') private chartCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() label: string = 'Statistics';
  @Input() borderColor: string = '#42A5F5';

  private chart!: Chart;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    // If the data or labels change via @Input, update the chart instance
    if (this.chart && (changes['data'] || changes['labels'])) {
      this.chart.data.labels = this.labels;
      this.chart.data.datasets[0].data = this.data;
      this.chart.update();
    }
  }

  private createChart() {
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data,
          borderColor: this.borderColor,
          backgroundColor: `${this.borderColor}33`,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          }
        }
      }
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }
}
