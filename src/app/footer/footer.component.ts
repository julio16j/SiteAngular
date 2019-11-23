import { Component, OnInit, Directive } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  clicou = false;
  registerForm: FormGroup;
  Contato: {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.validation();
  }
  validation() {
    this.registerForm = new FormGroup({
      address: new FormControl,
      name:    new FormControl,
      subject: new FormControl,
      message: new FormControl,
    });
  }
  EnviarContato() {
    this.Contato = Object.assign({}, this.registerForm.value);
    this.http.post('http://devants.com.br/contato/contato', this.Contato).subscribe(
      response => {console.log(response);
      }, error => {console.log(error, "Deu certo");
      });
  }
  mostra() {
    console.log('clicou');
    if (this.clicou === false) { this.clicou = true; } else { this.clicou = false; }
  }
}
