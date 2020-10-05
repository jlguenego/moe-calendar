import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    this.router.navigateByUrl('/planning');
  }
}
