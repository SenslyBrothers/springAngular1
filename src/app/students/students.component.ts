import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Student {
    // student_id:number, 
     
    name:String,  
    // student_email:String,  
    // student_branch:String,  
}


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 
  student : Student;
  submitted = false;  
  private baseUrl = 'http://localhost:8080';  

  constructor(private http:HttpClient,private studentService:StudentService) { }

  ngOnInit(): void {
    this.submitted= false;
  }

  studentsaveform=new FormGroup({  
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    student_email:new FormControl('',[Validators.required,Validators.email]),  
    student_branch:new FormControl()  
  });  

  saveStudent(saveStudent){  
     
  }  

  save(){  
     
    const name: String = "udulaIndunil";  
    this.student={name};
    console.log(this.student+" The type Script ");
    
    this.studentService.createStudent(this.student).subscribe(res=>{
      console.log(res);
      
          },
    error=>{
      console.log(error);
      
    })
  }  
  


}
