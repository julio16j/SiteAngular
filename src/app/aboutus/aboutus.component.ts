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
	  		document.getElementById("texto").innerHTML="Líder de Projetos – Responsável por avaliar como está sendo desenvolvido o projeto e avaliar cada passo que está sendo dado, além de validar o desenvolvimento de cada parte do projeto, sendo responsabilidade dele validar as conclusões de cada etapa do projeto. Igor é graduando em Engenharia de Computação, e tem experiência com desenvolvimento de softwares, sistemas integrados e frameworks, além de experiências com scrum.";
	  	} else if(i==2){
	  		document.getElementById("texto").innerHTML="Designer Geral – Define como será realizado cada design do projeto, aplicação ou site que a ser desenvolvido, além de prover os integrantes todos os desenhos necessários para construção da aplicação. Daniel é graduando em Design Gráfico e tem experiência com desenhos “pop modernos”.";
	  	} else if(i==3){
	  		document.getElementById("texto").innerHTML="CEO – Responsável por criar, comunicar e implementar a visão, a missão e a direção-geral da organização, gerenciando o desenvolvimento e implementação da estratégia global da empresa, além de dirigir, orientar e avaliar o trabalho de outros integrantes. Lucas tem experiência com gestão empresarial, desenvolvimento de aplicações e também de gerenciamento de recursos e operações gerais.";
	  	} else if(i==4){
	  		document.getElementById("texto").innerHTML="Programador Front-end – É aquele que desenvolve a parte visual da aplicação, responsável também por definir as conexões entre os objetos feitos na aplicação para que o programador backend desenvolva. Cayo é granduando em Ciência da Computação e tem bastante experiência com linguagens com Python e frames como Django, além ter facilidade e flexibilidade de aprendizado com qualquer linguagem e framework.";
	  	} else if(i==5){
	  		document.getElementById("texto").innerHTML="Programador Back-end – Responsável por desenvolver e codificar as questões de segurança, banco de de dados e webservice do site, trabalhando junto com o programador front-end em pró de alinhar o desenvolvimento das funcionalidades e estruturação do projeto. Julio tem experiência com diversas áreas de desenvolvimento que vai de circuitos integrados até desenvolvimento de webSites, além ter facilidade e flexibilidade de aprendizado com qualquer linguagem e framework.";
	  	} else{
	  		document.getElementById("texto").innerHTML="We are a group of friends who got the initiative to work together, bringing together the highest quality of each other to start a computer solutions, development and design company. We started this project on 24/07/2019, where we developed our applications, websites, logos and brand. We use some projects to test our team skills, and from that point on, we try to work harder and more closely giving rise to DevAnts. But why this name? \“Dev\” means developer and “Ants” means ant, ants always work together; and \"Devants\" in French means front. Therefore, we are ahead of developing projects always working together, seeking the best for our clients.";
	  	}
	  }
}
