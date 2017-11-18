import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'; 

@Component({
  selector: 'app-item',  
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  goalName:string;

  constructor(private route:ActivatedRoute,private router:Router) { 
    this.route.params.subscribe(val=> this.goalName = val.name);
  }

  ngOnInit() {
  }

  sendHome(){
this.router.navigate(['']);
  }

}
