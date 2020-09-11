import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEditStudent: FormGroup;
  student;

  constructor(private active: ActivatedRoute,
              private studentService: StudentService,
              private fb: FormBuilder,
              private router: Router) {
  }

  id = +this.active.snapshot.paramMap.get('id');

  ngOnInit(): void {
    // const user = this.studentService.getStudentById(.id);
    this.formEditStudent = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
      this.formEditStudent.patchValue(this.student);
    });
  }

  edit(): void {
    this.studentService.edit(this.formEditStudent.value, this.id).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
