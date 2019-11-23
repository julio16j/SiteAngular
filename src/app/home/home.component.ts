import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Textos: string[];
  constructor() { }

  ngOnInit() {
    this.MudaTexto();
    setInterval(this.MudaTexto, 500);
  }
  MudaTexto() {
    if (this.Textos === undefined) { this.Textos = ['Developing and Designing Solutions', 'A great team with good people', 'Get your idea off the drawing board']; }
    if (document.getElementById('background1').classList.length > 1) {
      document.getElementById('TextoDesc').innerHTML = this.Textos[0];
    }
    if (document.getElementById('background2').classList.length > 1) {
      document.getElementById('TextoDesc').innerHTML = this.Textos[1];
    }
    if (document.getElementById('background3').classList.length > 1) {
      document.getElementById('TextoDesc').innerHTML = this.Textos[2];
    }
  }
}
