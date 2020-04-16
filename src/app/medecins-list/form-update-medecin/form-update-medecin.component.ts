import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedecinService} from '../../services/medecin.service';

@Component({
  selector: 'app-form-update-medecin',
  templateUrl: './form-update-medecin.component.html',
  styleUrls: ['./form-update-medecin.component.css']
})
export class FormUpdateMedecinComponent implements OnInit {

  validatingForm: FormGroup;

  @Input() id: number;
  @Input() name: string;
  @Input() firstName: string;
  @Input() addr: string;
  @Input() phone: string;
  @Input() spec: string;

  constructor(private medService: MedecinService) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      updMedecinFormModalAddr: new FormControl('', Validators.required),
      updMedecinFormModalPhone: new FormControl('', Validators.pattern('[0-9]{10}')),
      updMedecinFormModalSpec: new FormControl('')
    });
  }

  get updMedecinFormModalAddr() { return this.validatingForm.get('updMedecinFormModalAddr'); }
  get updMedecinFormModalPhone() { return this.validatingForm.get('updMedecinFormModalPhone'); }
  get updMedecinFormModalSpec() { return this.validatingForm.get('updMedecinFormModalSpec'); }

  onSubmit() {
    this.medService.updateMedecin(
      this.id, this.updMedecinFormModalAddr.value,
      this.updMedecinFormModalPhone.value,
      this.updMedecinFormModalSpec.value
    );
  }

}
