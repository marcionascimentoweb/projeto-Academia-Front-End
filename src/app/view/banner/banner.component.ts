import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public banner1: string = ' assets/banner/banner1.jpg';  
  public banner2: string = ' assets/banner/banner2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
