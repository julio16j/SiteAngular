import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toogle =[];
  constructor() { }

  ngOnInit() {

    this.toogle[0] = "efeito1";
    this.toogle[1] = "efeito2" ;
    this.toogle[2] = "efeito3";
    this.toogle[3] = "efeito4";
    this.toogle[4] = "efeito5";
  }
  highlight(index){
    if(this.toogle[index]!="aumente"){
      this.toogle[index] = "aumente";
    }
    else{
      this.toogle[index] = "diminui";
    }
    }

}
