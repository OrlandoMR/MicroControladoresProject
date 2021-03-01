import { Component, OnInit } from '@angular/core';
import { LightService } from 'src/app/services/light.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  constructor(private lightService:LightService) { }

  ngOnInit(): void {
  }

  public turn(id:number,e:any){

    if(e.target.checked){
      this.lightService.changeStateLed(id,1).subscribe(resp=>{
        console.log(resp);
      });
    }
    if(!e.target.checked){
      this.lightService.changeStateLed(id,0).subscribe(resp=>{
        console.log(resp);
      });
    }



  }

}
