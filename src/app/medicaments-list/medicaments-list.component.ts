import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-medicaments-list',
  templateUrl: './medicaments-list.component.html',
  styleUrls: ['./medicaments-list.component.css']
})
export class MedicamentsListComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}

}
