import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Student } from '../students/students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }


  getStudentList():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}`+'students');
  }

  createStudent(student: Student):Observable<Student>{
    return this.http.post<Student>(`${this.baseUrl}`+"student",student);
  }

  deleteStudent(id: number):Observable<any> {  
    return this.http.delete(`${this.baseUrl}/student/${id}`);  
  }  
  
  getStudent(id: number): Observable<Student> {  
    return this.http.get<Student>(`${this.baseUrl}/student/${id}`);  
  }  
  
  updateStudent(id: number, Student: Student): Observable<Student> {  
    return this.http.put<Student>(`${this.baseUrl}/student/${id}`,Student);  
  }  


}
