import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public logo: string = ' assets/Logotipo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
