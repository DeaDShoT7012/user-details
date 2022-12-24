import { Component,OnInit} from '@angular/core';
import { ApiService } from '../sevices/api.service';
import { Userdetails } from 'src/models/userdetails';


@Component({
  selector: 'app-mian-page',
  templateUrl: './mian-page.component.html',
  styleUrls: ['./mian-page.component.css']
})
export class MianPageComponent implements OnInit{
  allusers:Userdetails[]=[]

  constructor(private api:ApiService){}

  
ngOnInit():void{
  this.api.getallusers().subscribe((data:any)=>{
    console.log(data);
    this.allusers=data.users
  })
}
}



