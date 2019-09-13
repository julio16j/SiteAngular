import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  clicou = false;
  constructor() { }

  ngOnInit() {
  }
  mostra(){
    if (this.clicou == false) this.clicou = true;
    else this.clicou = false;
  }
}
