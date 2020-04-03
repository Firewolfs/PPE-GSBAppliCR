import {Component, Input, OnInit} from '@angular/core';
import {MedicamentService} from '../services/medicament.service';

@Component({
  selector: 'app-medicaments-list',
  templateUrl: './medicaments-list.component.html',
  styleUrls: ['./medicaments-list.component.css']
})
export class MedicamentsListComponent implements OnInit {

  @Input() ref: string;
  @Input() name: string;
  @Input() idFam: string;
  @Input() compo: string;
  @Input() effect: string;
  @Input() contraindication: string;

  visible = false;

  constructor(private medicService: MedicamentService) {}

  ngOnInit(): void {}

  onGetMedic() {
    this.visible = this.visible === false;
  }

}
