import { Component, OnInit } from '@angular/core';
import { cardType } from 'src/app/Models/cardType';
import { ClubCardsService } from 'src/app/Services/club-cards.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StoresForCards } from 'src/app/Models/StoresForCards';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-chains-to-dream-card',
  templateUrl: './add-chains-to-dream-card.component.html',
  styleUrls: ['./add-chains-to-dream-card.component.css']
})
export class AddChainsToDreamCardComponent implements OnInit {
  cardTypeCode:number;
  allClubCards:cardType[]//מציג למנהל  הכרטיס את כל החנויות הרשומות לאתר 
  selectedClubCards:cardType[]=[] //רשימת החנויות שנבחרו
  alladdedClubs:number[]=[]//מכניס למערך את כל קודי כרטיס של החנויות שהתווספו
 subscription:Subscription;
 addedChainsCodes:number[];
storesforDreamCard:StoresForCards[]=[];
i:number=0;

  constructor(private location:Location,private cardService:ClubCardsService,private route:ActivatedRoute) { }
  
 

    ngOnInit() {
    this.subscription=this.route.params.subscribe((params)=>
    this.cardTypeCode=params['cardtypecode'] )
    this.cardService.getClubTypes().subscribe(
     res=>{
       this.allClubCards=res;
      for(var item of this.allClubCards)
      {
        item.logo=('https://localhost:44380/Images/'+item.logo);
      }
     
       })
    }


    addToList(c:cardType)
    {
      if (this.selectedClubCards.includes( c, 0 )) 
      {
        const index = this.selectedClubCards.indexOf(c, 0);
      if (index > -1) {
        this.selectedClubCards.splice(index, 1);}
      }
      else
      {
        this.selectedClubCards.push(c);
      }

      console.log(this.selectedClubCards);
    }

    addClubsToDreamCard()
    {
      
      this.cardService.getAddedChainsCodes(this.selectedClubCards).subscribe(
      res=>{this.addedChainsCodes=res;
        debugger
        for(this.i;this.i<this.addedChainsCodes.length;this.i++)
        {
          this.storesforDreamCard[this.i]={}as StoresForCards;
          this.storesforDreamCard[this.i].CTCode=this.cardTypeCode;
          this.storesforDreamCard[this.i].ChainCode=this.addedChainsCodes[this.i];
        }
       this.cardService.addStoresForTheDreamCard(this.storesforDreamCard).subscribe();
      });
    }
  
    backToLastPage()
{
  this.location.back();
}
}
