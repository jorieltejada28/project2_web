import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-donut-chart',
  imports: [],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css',
})
export class DonutChartComponent {
  @ViewChild('donutCanvas') private donutCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() colors: string[] = ['#d926aa', '#37cdbe', '#641ae6']; // Default secondary, accent, primary

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
    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.data,
          backgroundColor: this.colors,
          hoverOffset: 10,
          borderWidth: 4,
          borderColor: 'transparent',
          spacing: 10,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        },
        cutout: '75%' // Slightly thinner look to emphasize the gaps
      }
    };

    this.chart = new Chart(this.donutCanvas.nativeElement, config);
  }
}
