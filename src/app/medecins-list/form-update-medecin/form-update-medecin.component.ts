import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-update-medecin',
  templateUrl: './form-update-medecin.component.html',
  styleUrls: ['./form-update-medecin.component.css']
})
export class FormUpdateMedecinComponent implements OnInit {

  @Input() addr: string;

  constructor() { }

  ngOnInit(): void {

  }

}
