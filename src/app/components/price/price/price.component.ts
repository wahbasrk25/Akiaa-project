import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  priceTable:any;

  constructor(private price : PriceService) { }

  ngOnInit(): void {

     this.getInfoprice();
    
  }

getInfoprice(){

    this.priceTable = this.price.priceInfo;
}






}
