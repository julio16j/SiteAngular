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
    this.toogle[0] = "nada";
    this.toogle[1] = "nada" ;
    this.toogle[2] = "nada";
    
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
