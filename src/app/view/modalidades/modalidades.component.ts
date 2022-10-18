import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.component.html',
  styleUrls: ['./modalidades.component.css']
})
export class ModalidadesComponent implements OnInit {

  public card_1: string = 'assets/card/card_1.png';
  public card_2: string = 'assets/card/card_2.png';
  public card_3: string = 'assets/card/card_3.png';
  public card_4: string = 'assets/card/card_4.png';
  public card_5: string = 'assets/card/card_5.png';
  public card_6: string = 'assets/card/card_5.png';

  constructor() { }

  ngOnInit(): void {
  }

}
