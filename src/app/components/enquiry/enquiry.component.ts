import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Enquiry } from '../../common/enquiry';
import { EnquiryService } from '../../services/enquiry.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../search/search.component";
import { interval } from 'rxjs';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, SearchComponent],
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  
  enquires:Enquiry[]=[];
  searchMode:boolean=false;
 
  constructor(
    private enquiryService : EnquiryService,
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.enquiryList();
    
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    
    if(this.searchMode){
      this.handleSearchProduct();
    }
    
  }

  enquiryList(){
    this.enquiryService.getEnquiryList().subscribe(
      data=>{
        this.enquires = data;
      }
    )
  }

  handleSearchProduct(){
    const theKeyWord: string = this.route.snapshot.paramMap.get('keyword')!;

    //now search for product using keyword

    this.enquiryService.searchEnquiry(theKeyWord).subscribe(
      data=>{
        this.enquires=data;
        console.log(data)
      }
    )
  }
}
