import { Component } from '@angular/core';
import { MainComponent } from '../../layouts/main/main.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [MainComponent, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Data for the line chart
  public statsData = [150, 230, 180, 450, 390, 560, 700];
  public statsLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Customization properties
  public chartLabel = 'User Registrations';
  public chartColor = '#d926aa';
}
