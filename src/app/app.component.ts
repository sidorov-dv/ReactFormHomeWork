import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formValid = {};

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.max(99)]),
    jobs: new FormArray([])
  });

  onSubmit() {
    console.log(this.profileForm.value);
    this.formValid = this.profileForm.value;
  }

  get jobs() {
    return this.profileForm.get('jobs') as FormArray;
  }

  addJob() {
    this.jobs.push(new FormControl(''));
  }

  get firstName() {
    return this.profileForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.profileForm.get('lastName') as FormControl;
  }

  get age() {
    return this.profileForm.get('age') as FormControl;
  }
}
