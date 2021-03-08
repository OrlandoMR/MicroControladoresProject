import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LightService } from 'src/app/services/light.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  form: FormGroup;
  Sector1:boolean;
  Sector2:boolean;


  constructor(private lightService:LightService, private formBuilder: FormBuilder) {
    lightService.getSector().subscribe((resp:any)=>{
      if(resp.Sector1==1){
          this.Sector1=true;
      }else{
          this.Sector1=false;
      }

      if(resp.Sector2==1){
          this.Sector2=true;
      }else{
          this.Sector2=false;
      }
      console.log(this.Sector1)
      this.form = this.formBuilder.group({
              Sector1: [this.Sector1],
              Sector2: [this.Sector2]
          });

    } )
  }

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
