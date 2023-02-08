import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

priceInfo = [

    {type:"Bed Room" , Url:"../../assets/images/card1.jpg" , Price:"45000 LE"},
    {type:"Living Room" , Url:"../../assets/images/card4.jpg" , Price:"40000 LE"},
    {type:"Doors" , Url:"../../assets/images/card7.jpg" , Price:"6000 LE"}
    
]

}
