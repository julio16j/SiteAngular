import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  Hover = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i<5; i++){
      this.Hover.push(false);
  }
}

}
