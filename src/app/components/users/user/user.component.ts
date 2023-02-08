import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


   DataTable:any;
 


  constructor(private user:UsersService) { }

  ngOnInit(): void {



  }

  getDatainfofromservice(){

      this.user.getinfofromplaceholder().subscribe(
         
         (result: any) => {
           this.DataTable = result;
         }
      )
     
        
      }
        
     
     
 


}
