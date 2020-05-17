import { Component, OnInit } from '@angular/core';
import { StudentService, Student, StudentId } from '../services/student.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentProfile = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.min(3)])
  });

 

  students: StudentId[] = [];

  student: StudentId= null;

  constructor(private http:HttpClient, private studentService :StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
    console.log("oninit");
    
  }
  save(){  
     
    const name: String = this.studentProfile.value.firstName; 
    console.log(name);
    
    let id= null;

    this.student={id,name};
    console.log(this.student+" The type Script ");
    
    this.studentService.createStudent(this.student).subscribe(res=>{
      // console.log(res);
      
          },
    error=>{
      console.log(error);
      
    })
  }  

  update(){
    // console.log(this.student);
    const name: String = this.studentProfile.value.firstName; 

    const id = this.student.id;
    const stu = {id,name};
    console.log(stu);
    
    this.studentService.updateStudent(this.student.id,stu).subscribe(res=>{
      // console.log(res);
    },
    error=>{
      console.log(error);
      
    })

    this.ngOnInit();
  }
  




  getAllStudents(){

    this.studentService.getStudentList().subscribe(res=>{
      this.students=res;
      // this.students.forEach(x=>{console.log(x);
      // })
    },
    error=>{
      console.log(error);
      
    })    
  }


  delete(id:number){
    this.studentService.deleteStudent(id).subscribe(
      res=>{
        // console.log(res);
      },
      error=>{
        console.log(error);
      }
    )
    this.ngOnInit();
  }    
  

  view(id:number){
    this.studentService.getStudent(id).subscribe(res=>{
      this.student=res
      this.studentProfile.setValue({firstName:this.student.name});
      this.ngOnInit();
      // console.log(res);
    },error=>{
      console.log(error);
    })
  }

}
