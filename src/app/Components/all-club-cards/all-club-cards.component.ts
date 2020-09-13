import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { cardType } from 'src/app/Models/cardType';
import { ClubCardsService } from 'src/app/Services/club-cards.service';
import { DOCUMENT } from '@angular/common';
import { SalesService } from 'src/app/Services/sales.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { ClubCards } from 'src/app/Models/ClubCards';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-all-club-cards',
  templateUrl: './all-club-cards.component.html',
  styleUrls: ['./all-club-cards.component.css']
})


export class AllClubCardsComponent implements OnInit {
 
  allClubCards:cardType[]=[]; 
   alladdedClubs:ClubCards[]=[];
  clubcard:ClubCards=new ClubCards();
  customerName:string;
  selectedClubCards:cardType[]=[];

  constructor(private router:Router, private customerService:CustomerService,private cardService:ClubCardsService , private saleService:SalesService , @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() 
  {
  this.customerName=this.customerService.ThisCustomer.FirstName;
      this.cardService.getClubTypes().subscribe(
             res=>
             {
               this.allClubCards=res;
               for(var item of this.allClubCards)
               {
        
                 item.logo=('https://localhost:44380/Images/'+item.logo);
               }

      });
    }


    addToList(c:cardType)
    {
      debugger
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

   
    addClubsToCustomer()
    {
      debugger
     for(let item of this.selectedClubCards)
     {
      this.clubcard.TCode=item.TCode;
      this.clubcard.CDCode= this.customerService.ThisCustomer.CDCode;
      this.alladdedClubs.push(this.clubcard);
      this.clubcard=new ClubCards();
     
     }
     this.cardService.addClubCardsByCustomer(this.alladdedClubs).subscribe();
     this.router.navigate(['/userPersonalHomePage']); 
    }
   
    

  
    
  
  }
  



  
     
  
      



   
    
 


   


