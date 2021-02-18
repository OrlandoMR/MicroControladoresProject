import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { AmbientService } from 'src/app/services/ambient.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-ambient',
  templateUrl: './ambient.component.html',
  styleUrls: ['./ambient.component.scss']
})
export class AmbientComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // dataTemp: number[] = [20, 21, 21, 22, 34, 23, 42, 23, 26, 23, 37, 23, 26];
  // dataTime= ["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];
  dataTemp: number[] = [];
  dataHum: number[] = [];
  dataTime: string[] = [];

  constructor(private ambientService: AmbientService) {
    this.dataChart();
    console.log(this.dataTime)

  }

  ngOnInit(): void {

  }

  private chartLine() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: this.dataTemp
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        type: "datetime",
        categories: this.dataTime
      }
    };
  }

  public dataChart() {
    this.dataTemp = this.ambientService.getTemperatura();
    this.dataHum = this.ambientService.getHumedad();
    this.dataTime = this.ambientService.getTiempo();
    this.chartLine();
  }

}
