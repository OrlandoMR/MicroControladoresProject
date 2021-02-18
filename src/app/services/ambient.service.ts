import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AmbientModel } from '../models/ambient.model';

const URL = "https://microproject-ee507-default-rtdb.firebaseio.com/ambiente.json";

@Injectable({
  providedIn: 'root'
})
export class AmbientService {



  constructor(private http: HttpClient) { }

  public getAmbientes() {
    return this.http.get(URL).pipe(map((resp: AmbientModel) => this.crearArreglo(resp)));
  }

  private crearArreglo(ambiente: AmbientModel) {

    const ambientes: AmbientModel[] = [];

    if (ambiente === null) { return []; }

    Object.keys(ambiente).forEach((key) => {
      const ambient: AmbientModel = ambiente[key];
      ambient.id = key;
      ambientes.push(ambient);
    })

    return ambientes;
  }

  public getTemperatura() {
    const dataTemperatura: number[] = [];
    this.getAmbientes().subscribe(resp => {
      for (let i of resp) {
        dataTemperatura.push(i.temperatura);
      }
    });
    return dataTemperatura;
  }


  public getHumedad() {
    const dataHumedad: number[] = [];
    this.getAmbientes().subscribe(resp => {
      for (let i of resp) {
        dataHumedad.push(i.humedad);
      }
    });
    return dataHumedad;
  }

  public getTiempo() {
    const dataTiempo: string[] = [];
    this.getAmbientes().subscribe(resp => {
      for (let i of resp) {
        dataTiempo.push(i.tiempo);
      }
    });
    return dataTiempo;
  }

}
