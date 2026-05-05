import { Component } from '@angular/core';
import { MainComponent } from '../../layouts/main/main.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { DonutChartComponent } from '../../components/donut-chart/donut-chart.component';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    MainComponent,
    LineChartComponent,
    BarChartComponent,
    DonutChartComponent,
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Existing Line Chart Data
  public statsData = [150, 230, 180, 450, 390, 560, 700];
  public statsLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public chartLabel = 'User Registrations';
  public chartColor = '#d926aa'; // Secondary Pink

  // New Bar Chart Data
  public monthlyData = [400, 550, 300, 700, 600, 450, 800];
  public monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartLabel = 'Monthly Growth';
  public barColor = '#37cdbe'; // daisyUI Accent

  public donutData = [450, 200, 150];
  public donutLabels = ['BDO', 'LandBank', 'China Bank'];
  public donutColors = [
    '#0038a8', // Deep Vibrant BDO Blue
    '#00a651', // Sharp LandBank Green
    '#ff0000'  // Pure China Bank Scarlet
  ];

  public transactions = [
    {
      name: 'STRIPE PAYMENTS',
      description: 'ACH CREDIT / PAYOUT-192837465',
      date: 'MAY 05',
      amount: 2450.00,
      status: 'COMPLETED'
    },
    {
      name: 'AMZN MKTP US*8J9K',
      description: 'POS PURCHASE / SEATTLE WA',
      date: 'MAY 04',
      amount: -124.50,
      status: 'COMPLETED'
    },
    {
      name: 'HOUSING MANAGEMENT LLC',
      description: 'WIRE TRANSFER / MONTHLY RENT',
      date: 'MAY 03',
      amount: -1800.00,
      status: 'PENDING'
    },
    {
      name: 'NEXTERA ENERGY',
      description: 'UTILITY BILL / ELEC-4492',
      date: 'MAY 02',
      amount: -68.21,
      status: 'COMPLETED'
    },
    {
      name: 'BDO ATM WITHDRAWAL',
      description: 'CASH W/D / BR-0922 TAGUIG',
      date: 'MAY 01',
      amount: -100.00,
      status: 'COMPLETED'
    }
  ];
}
