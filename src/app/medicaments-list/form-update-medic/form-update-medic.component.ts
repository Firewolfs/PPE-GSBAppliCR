import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-update-medic',
  templateUrl: './form-update-medic.component.html',
  styleUrls: ['./form-update-medic.component.css']
})
export class FormUpdateMedicComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
