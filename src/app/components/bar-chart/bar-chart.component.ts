import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent {
  @ViewChild('barCanvas') private barCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() label: string = 'Statistics';
  @Input() barColor: string = '#641ae6';

  private chart!: Chart;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && (changes['data'] || changes['labels'])) {
      this.chart.data.labels = this.labels;
      this.chart.data.datasets[0].data = this.data;
      this.chart.update();
    }
  }

  private createChart() {
    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data,
          backgroundColor: this.barColor,
          borderRadius: 6, // Gives it a modern, rounded look
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    };
    this.chart = new Chart(this.barCanvas.nativeElement, config);
  }
}
