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

	mudatexto(i){
	  	if(i==1){
	  		document.getElementById("texto").innerHTML="Aqui vai o texto do Igor";
	  	} else if(i==2){
	  		document.getElementById("texto").innerHTML="E aqui o do Daniel";
	  	} else if(i==3){
	  		document.getElementById("texto").innerHTML="Esse é o do Lucas";
	  	} else if(i==4){
	  		document.getElementById("texto").innerHTML="O mais genial de todos... o do Cayo";
	  	} else if(i==5){
	  		document.getElementById("texto").innerHTML="E o patético de Julio";
	  	} else{
	  		document.getElementById("texto").innerHTML="Normal";
	  	}
	  }
}
