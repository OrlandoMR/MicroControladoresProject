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
  TempAlt: boolean=false;
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
      console.log(resp)
      if (resp.Hora.length > 100) {


      }
      this.dataTemp = resp.Temperatura.slice(-15)
      this.dataHum = resp.Humedad.slice(-15)
      this.dataPres = resp.Presion.slice(-15)
      this.dataTime = resp.Hora.slice(-15)

      for(let i in this.dataPres){
          this.dataPres[i]=Math.round(this.dataPres[i]/10)
      }
      for(let i in this.dataHum){
          this.dataHum[i]=Math.round(this.dataHum[i])
      }
      for(let i in this.dataTemp){
          this.dataTemp[i]=Math.round(this.dataTemp[i])

      }
      if(this.dataTemp[14]>50){
        this.TempAlt=true;
      }else{
        this.TempAlt=false;
      }

      this.chartLine();



    });



  }
}
