import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu-genral',
  templateUrl: './menu-genral.component.html',
  styleUrls: ['./menu-genral.component.css']
})
export class MenuGenralComponent implements OnInit{
 @ViewChild('zoneRecherche', {static: false})
 maZoneDeRecherche: ElementRef | undefined;
 @Output()
 lancerRecherche: EventEmitter<string> = new EventEmitter<string>()
  constructor() {
  }
  ngOnInit() {
  }

  rechercher(){
    this.lancerRecherche.emit(this.maZoneDeRecherche?.nativeElement.value);
  }

}
