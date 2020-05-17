import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

export interface Student {
  
  name:String,  
}


export interface StudentId extends Student{
    id : number
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }


  getStudentList():Observable<StudentId[]>{
    return this.http.get<StudentId[]>(`${this.baseUrl}`+'students');
  }

  createStudent(student: Student):Observable<Student>{
    return this.http.post<Student>(`${this.baseUrl}`+"student",student);
  }

  deleteStudent(id: number):Observable<any> {  
    return this.http.delete(`${this.baseUrl}student/${id}`);  
  }  
  
  getStudent(id: number): Observable<StudentId> {  
    return this.http.get<StudentId>(`${this.baseUrl}student/${id}`);  
  }  
  
  updateStudent(id: number, student: StudentId): Observable<Student> {  
    return this.http.put<Student>(`${this.baseUrl}student/${id}`,student);  
  }  


}
