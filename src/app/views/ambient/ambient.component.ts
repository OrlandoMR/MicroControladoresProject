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
  ApexGrid,
  ApexMarkers,
  ApexYAxis,
  ApexLegend
} from "ng-apexcharts";
import { AmbientService } from 'src/app/services/ambient.service';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
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
  dataTime: string[] = ["A", "B", "B", "D", "F", "G", "H", "I", "J", "K", "L", "M"];
  dataTemp: number[] = [];
  dataHum: number[] = [];
  // dataTime: string[] = [];
  dataPres: number[] = [];

  constructor(private ambientService: AmbientService) {
    // this.dataChart();

    setInterval(() => { this.dataChart() }, 5000);
  }

  ngOnInit(): void {

  }

  private chartLine() {
    this.chartOptions = {
      series: [
        {
          name: "Temperatura",
          data: this.dataTemp
        },
        {
          name: "Presion",
          data: this.dataPres
        },
        {
          name: "Humedad",
          data: this.dataHum
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
        // type: "datetime",
        categories: this.dataTime
      }
    };
  }



  public dataChart() {

    this.ambientService.getAmbientes().subscribe((resp) => {

      if (resp.length > 100) {


      }
      this.dataTemp = [];
      this.dataHum = [];
      this.dataPres = [];
      const data=resp.slice(-15);

      for (let i of data) {
        if (i != null) {

          this.dataTemp.push(i.Temperatura);
          this.dataHum.push(i.Humedad);
          this.dataPres.push(i.Presion/100);

        }
      }
    })
    // this.getTemperatura();
    // this.getHumedad();
    // this.getPresion();
    this.chartLine();

  }

  // private getTemperatura() {
  //
  //   this.ambientService.getAmbientes().subscribe(resp => {
  //       this.dataTemp.push(resp.Temperatura);
  //   });
  //
  // }
  //
  // private getHumedad() {
  //   this.ambientService.getAmbientes().subscribe(resp => {
  //     this.dataHum.push(resp.Humedad);
  //   });
  //
  // }
  //
  // private getPresion() {
  //   this.ambientService.getAmbientes().subscribe(resp => {
  //     this.dataPres.push(resp.Presion);
  //   });
  // }

}
