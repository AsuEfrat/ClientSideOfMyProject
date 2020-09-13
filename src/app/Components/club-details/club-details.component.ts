import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClubCards } from 'src/app/Models/ClubCards';
import {Location} from '@angular/common';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {
subscription:Subscription;
clubcard:ClubCards;
  constructor(private location:Location,private route:ActivatedRoute) { }

  ngOnInit() {
    debugger
    this.clubcard=JSON.parse(this.route.snapshot.params["clubcard"]);
    // this.subscription=this.route.params.subscribe((params)=>
    //   this.clubcard=params['clubcard']
    // );
  }
 backToLastPage()
{
  this.location.back();
}
 

}
