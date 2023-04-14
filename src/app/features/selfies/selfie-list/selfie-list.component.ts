import {Component, OnInit} from '@angular/core';
import {Selfie} from "../../../models/selfie";


@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit{
  lesSelfies: Selfie[] = [
    {image: '/assets/images/16682378_web1_190503-GNG-MayFourthChewbacca_1.jpg',titre:'un super selfie', wookie: {nom: 'chewie' , selfies:[]}},
    {image: '/assets/images/one-fun-day-in-the-life-of-a-wookie_big.jpg',titre:'un selfie de ouff' ,wookie: {nom: 'chewie2' , selfies:[]}}
  ];
  constructor() {
  }

  ngOnInit() {

  }

}
