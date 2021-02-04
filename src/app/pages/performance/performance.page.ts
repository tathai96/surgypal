import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements OnInit {
  pieChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      position: 'top',
    },
    // plugins: {
    //   datalabels: {
    //     formatter: (value, ctx) => {
    //       const label = ctx.chart.data.labels[ctx.dataIndex];
    //       // return label;
    //     }
    //   }
    // }
  };

  pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  pieChartData: number[] = [300, 500, 100];
  pieChartData2: number[] = [100,200,300,400,50];
  pieChartType: ChartType = 'pie';
  pieChartLegend = false;
  pieChartPlugins = [pluginDataLabels];
  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(255, 146, 0, 0.3)', 'rgba(31, 146, 0, 0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
