import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formAddStudent: FormGroup;

  constructor(private studentService: StudentService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formAddStudent = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  add() {
    this.studentService.add(this.formAddStudent.value).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
