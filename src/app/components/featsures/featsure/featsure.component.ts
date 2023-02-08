import { Component, OnInit } from '@angular/core';
import { BadroomService } from '../../services/badroom.service';

@Component({
  selector: 'app-featsure',
  templateUrl: './featsure.component.html',
  styleUrls: ['./featsure.component.css']
})
export class FeatsureComponent implements OnInit {

  badroomTable:any;

  constructor(private badroom : BadroomService) { }

  ngOnInit(): void {
     
    this.getbadroominfo();

  }


  
getbadroominfo(){

    this.badroomTable = this.badroom.badroomdata;
    
}



}
