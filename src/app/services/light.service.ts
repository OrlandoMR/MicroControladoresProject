import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "https://microproject-ee507-default-rtdb.firebaseio.com/Casa/Jardin";

@Injectable({
  providedIn: 'root'
})
export class LightService {



  constructor(private http: HttpClient) { }

  public changeStateLed(id:number,value:number){

    return this.http.put(URL+"/Luz_"+id.toString()+".json",value);
  }




}
