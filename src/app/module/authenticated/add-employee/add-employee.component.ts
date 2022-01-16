import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  group: any[];
  employeeForm: FormGroup;
  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
    });
  }

}
