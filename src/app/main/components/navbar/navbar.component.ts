import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private route : ActivatedRoute

  
  ) { }

  ngOnInit() {
   /* $(document).ready(function () {
      $('nav ul').find('li').each(function(){
      $(this).click(function () {
        
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
        })
      })
    })
    const path = this.route.snapshot.paramMap;
    console.log("url -->" + path );*/
  }

 
}

