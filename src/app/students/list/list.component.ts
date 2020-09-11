import {Component, OnInit} from '@angular/core';
import {IStudent} from '../../istudent';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listStudents: IStudent[] = [];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.studentService.getAll().subscribe(data => {
      this.listStudents = data;
      console.log(this.listStudents);
    });
  }

  delete(index): void {
    const student = this.listStudents[index];
    if (confirm('ok?')) {
      this.studentService.delete(student.id).subscribe(data => {
        this.getAll();
      });
    }
  }
}
