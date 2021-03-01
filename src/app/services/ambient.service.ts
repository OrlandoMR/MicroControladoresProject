import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AmbientModel } from '../models/ambient.model';

const URL = "https://microproject-ee507-default-rtdb.firebaseio.com/Casa/Sensores";

@Injectable({
  providedIn: 'root'
})
export class AmbientService {



  constructor(private http: HttpClient) { }

  public getAmbientes() {
    return this.http.get(URL+".json").pipe(map((resp: AmbientModel[]) => resp));
  }

  public deleteAmbient(id:string){
    return this.http.delete(URL+"/"+id+".json")
  }





}
