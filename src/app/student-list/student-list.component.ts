import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../students/students.component';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  student: Student= null;

  constructor(private http:HttpClient, private studentService :StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
    console.log("oninit");
    
  }

  getAllStudents(){

    this.studentService.getStudentList().subscribe(res=>{
      this.students=res;
      this.students.forEach(x=>{console.log(x);
      })
    },
    error=>{
      console.log(error);
      
    })    
  }


  delete(id:number){
    this.studentService.deleteStudent(id).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    )
    this.ngOnInit();
  }    
  
  update(id:number,student:Student){
    this.studentService.updateStudent(id,student).subscribe(res=>{
      console.log(res);
    },
    error=>{
      console.log(error);
      
    })

    this.ngOnInit();
  }


  view(id:number){
    this.studentService.getStudent(id).subscribe(res=>{
      this.student=res
      console.log(res);
    },error=>{
      console.log(error);
    })
  }
}
