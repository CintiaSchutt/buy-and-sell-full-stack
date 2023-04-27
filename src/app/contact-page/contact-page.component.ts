import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing?: Listing;

  constructor(
    private listingsService: ListingsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id') as string);
    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.message = `Hi, I'm interested in your ${this.listing?.name?.toLocaleLowerCase()}!`
      });
    }


  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
